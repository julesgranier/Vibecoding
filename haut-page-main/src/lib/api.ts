export interface Participant {
  id: string;
  name: string;
  status: string;
}

export interface Creator {
  id: string;
  name: string;
}

export interface Location {
  type: string;
  coordinates: [number, number]; // [longitude, latitude]
}

export interface Event {
  id: string;
  name: string;
  address: string;
  fullAddress: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  location: {
    latitude: number;
    longitude: number;
  };
  participants: Participant[];
  creator: Creator;
  chatId: string;
  createdAt: string;
  updatedAt: string;
  maxParticipants: number;
  nbParticipants: number;
}

export interface ApiResponse {
  status: string;
  event: Event;
}

class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchApi(endpoint: string): Promise<ApiResponse> {
  try {
    const response = await fetch(`${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new ApiError(
        `HTTP Error: ${response.status} ${response.statusText}`,
        response.status
      );
    }

    const data = await response.json();
    
    if (data.status !== 'success') {
      throw new ApiError(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Handle network errors or other fetch failures
    throw new ApiError(
      error instanceof Error ? error.message : 'Network request failed'
    );
  }
}

export const eventApi = {
  async getEventById(id: string): Promise<Event> {
    const response = await fetchApi(`https://eventmicroservice-sxjgrhsbcq-ew.a.run.app/${id}`);
    return response.event;
  },
};

export { ApiError, fetchApi };