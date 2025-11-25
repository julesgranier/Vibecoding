import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Event } from '@/lib/api';
import MapView from './MapView';
const ActivityDetails: React.FC<{ event: Event }> = ({ event }) => {
  console.log(event)
  return <div className="flex flex-col justify-center items-start gap-5 flex-[1_0_0]">
      <section className="flex flex-col justify-center items-start gap-[30px] self-stretch bg-[rgba(255,255,255,0.12)] p-10 rounded-[20px] max-sm:p-[25px]">
        <div className="flex items-center gap-1.5">
          <h2 className="text-white text-2xl font-bold leading-[28.8px] tracking-[-1.5px] max-sm:text-xl">
            Description
          </h2>
        </div>
        <p className="self-stretch text-white text-lg font-normal leading-[23.4px] tracking-[-1px] opacity-75 whitespace-pre-line max-sm:text-base">{event.description}</p>
      </section>

      <section className="flex flex-col justify-center items-start gap-2.5 self-stretch bg-[rgba(255,255,255,0.12)] px-10 py-[30px] rounded-[20px] max-sm:p-[25px]">
        <div className="flex justify-between items-center self-stretch">
          <div className="flex items-center gap-1.5">
            <h2 className="text-white text-2xl font-bold leading-[28.8px] tracking-[-1.5px] max-sm:text-xl">
              Participants
            </h2>
            <span className="text-white text-2xl font-normal leading-[28.8px] tracking-[-1.5px] opacity-50">
              ({event.nbParticipants}/{event.maxParticipants})
            </span>
          </div>
          <div className="flex justify-center items-center gap-[6.5px]">
            <div className="flex items-center -space-x-2">
              {event.participants.map(participant => <Avatar key={participant.id} className="w-8 h-8 border-2 border-white/50">
                  <AvatarImage src={`https://firebasestorage.googleapis.com/v0/b/mateapp-99.appspot.com/o/usersPics%2F${participant.id}?alt=media&token=${participant.id}`} alt={participant.name} />
                  <AvatarFallback className="bg-gray-400 text-white text-xs">
                    {participant.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>)}
            </div>
             {event.nbParticipants - event.participants.length > 0 ? <span className="text-white text-xl font-normal leading-[13px] tracking-[-1px] opacity-75">
              +{event.nbParticipants - event.participants.length}
            </span> : null}
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-start gap-[30px] self-stretch bg-[rgba(255,255,255,0.12)] p-10 rounded-[20px] max-sm:p-[25px]">
        <div className="flex items-center gap-1.5">
          <h2 className="text-white text-2xl font-bold leading-[28.8px] tracking-[-1.5px] max-sm:text-xl">
            Localisation
          </h2>
        </div>
        <MapView 
          coordinates={[event.location.latitude, event.location.longitude]}
          className="self-stretch max-sm:h-[250px]" 
        />
      </section>
    </div>;
};
export default ActivityDetails;