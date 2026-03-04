import React from 'react';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Ticket = ({ticket}) => {
    console.log(ticket)
    const {id, title, description, customer, priority, status, createdAt} = ticket
    return (
        <div className='p-4 text-gray-500 shadow-xl rounded-lg bg-white'>
            <div className='flex justify-between'>
                <h3 className='font-bold text-black'>{title}</h3>
                <button className={` ${status === "Open"? "bg-[#B9F8CF] text-[#02A53B]" : "bg-[#F8F3B9] text-[#FEBB0C]"} py-0.5 px-2 rounded-xl`}><span><FontAwesomeIcon icon="fa-solid fa-circle" /></span> {status}</button>
            </div>
            <div className='my-4'>
                <p>{description}</p>
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <p>#{id}</p>
                    <p className={`${priority === "Low"? "text-green-500" : `${priority === "Medium"? "text-yellow-500" : "text-red-500"}`}`}>{priority}</p>
                </div>
                <div className='flex gap-2'>
                    <p>{customer}</p>
                    <p><FontAwesomeIcon icon="fa-regular fa-calendar" /> {createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;