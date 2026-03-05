import React from 'react';
import Ticket from '../Ticket/Ticket';

const TicketsSection = ({ticketData, setCountProgress, countProgress,setAddToTask,addToTask}) => {
    
    return (
        <div className='my-10'>
            <h2 className='text-xl font-bold mb-4'>Customer Tickets</h2>
            <div className='grid lg:grid-cols-2 gap-6'>
                {ticketData.map(ticket=> <Ticket key={ticket.id} ticket={ticket} setCountProgress={setCountProgress} countProgress={countProgress} setAddToTask={setAddToTask} addToTask={addToTask}></Ticket>)}
            </div>
        </div>
    );
};

export default TicketsSection;