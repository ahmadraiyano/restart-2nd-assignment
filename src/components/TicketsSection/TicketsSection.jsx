import React from 'react';
import Ticket from '../Ticket/Ticket';

const TicketsSection = ({ticketData}) => {
    
    return (
        <div className='my-10'>
            <h2 className='text-xl font-bold'>Customer Tickets</h2>
            <div className='grid lg:grid-cols-2 gap-8'>
                {ticketData.map(ticket=> <Ticket key={ticket.id} ticket={ticket}></Ticket>)}
            </div>
        </div>
    );
};

export default TicketsSection;