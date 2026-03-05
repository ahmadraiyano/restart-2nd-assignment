import React from 'react';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify';
// Toastify


const Ticket = ({ticket, setCountProgress, countProgress,setAddToTask,addToTask}) => {
    const {id, title, description, customer, priority, status, createdAt} = ticket

    const handleCard = (task) => {
        toast("Added to Task")
        setCountProgress(countProgress + 1)

        const newAddToTask = [...addToTask, task]
        setAddToTask(newAddToTask)
    }
    return (
        <button onClick={() => handleCard(ticket)} className='text-left cursor-pointer'>
            <div className='p-4 text-gray-500 shadow-xl rounded-lg bg-white'>
            <div className='flex justify-between'>
                <h3 className='font-bold text-black'>{title}</h3>
                <p className={` ${status === "Open"? "bg-[#B9F8CF] text-[#02A53B]" : "bg-[#F8F3B9] text-[#FEBB0C]"} py-0.5 px-2 rounded-xl`}><span><FontAwesomeIcon icon="fa-solid fa-circle" /></span> {status}</p>
            </div>
            <div className='my-4'>
                <p>{description}</p>
            </div>
            <div className='sm:flex justify-between'>
                <div className='flex gap-2'>
                    <p>#{id}</p>
                    <p className={`${priority === "Low"? "text-green-500" : `${priority === "Medium"? "text-yellow-500" : "text-red-500"}`}`}>{priority} Priority</p>
                </div>
                <div className='flex gap-2'>
                    <p>{customer}</p>
                    <p><FontAwesomeIcon icon="fa-regular fa-calendar" /> {createdAt}</p>
                </div>
            </div>
        </div>
        </button>
    );
};

export default Ticket;