import React, { use } from 'react';
import TicketsSection from '../TicketsSection/TicketsSection';

const Main = ({promiseTicketData}) => {
    const ticketData = use(promiseTicketData)
    return (
        <div className='w-10/12 mx-auto'>
            <div className='md:w-2/3'>
                <TicketsSection ticketData={ticketData}></TicketsSection>
            </div>
        </div>
    );
};

export default Main;