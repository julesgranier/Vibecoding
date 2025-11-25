import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { eventApi, Event, ApiError } from '@/lib/api';

interface UseEventOptions {
  enabled?: boolean;
  retry?: boolean | number;
  refetchOnWindowFocus?: boolean;
}

export function useEvent(
  eventId: string | undefined,
  options: UseEventOptions = {}
): UseQueryResult<Event, ApiError> {
  const {
    enabled = !!eventId,
    retry = 3,
    refetchOnWindowFocus = false,
  } = options;

  return useQuery({
    queryKey: [eventId],
    queryFn: () => {
      if (!eventId) {
        throw new ApiError('Event ID is required');
      }
      return eventApi.getEventById(eventId);
    },
    enabled,
    retry,
    refetchOnWindowFocus,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
}