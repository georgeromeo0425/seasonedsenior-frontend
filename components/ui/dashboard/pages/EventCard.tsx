import React from 'react';

import Image from 'next/image';

type EventCardProps = {
    creator: string;
    name: string;
    fee: number;
    date: string;
    time: string;
}

const EventCard = ({
    creator,
    name,
    fee,
    date,
    time
}: EventCardProps) => {
    return (
        <div className="relative">
            <Image className="absolute opacity-50 z-0" src={"/images/event_card.png"} alt={""} width={350} height={240}/>
            <div className="flex flex-col justify-between bg-black w-[350px] h-[240px] z-10 p-1">
                <div className="text-white z-10">{`Created by: ${creator}`}</div>
                <div className="text-white z-10">
                    <div className="flex items-center">
                        <p className="font-bold text-xl mr-2">{name}</p>
                        <p>{`Fee: ${fee}`}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p> {date} </p>
                            <p> {time} </p>
                        </div>
                        <span className="px-8 py-2 border border-white cursor-pointer">
                            <p>VIEW</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard;
