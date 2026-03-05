import React, { use, useState } from 'react';
import TicketsSection from '../TicketsSection/TicketsSection';
import TaskStatusSection from '../TaskStatusSection/TaskStatusSection';

const Main = ({promiseTicketData,setCountProgress, countProgress,setCountResolved,countResolved}) => {
    const ticketData = use(promiseTicketData)


    const [addToTask, setAddToTask] = useState([])

    return (
        <div className='w-10/12 mx-auto md:flex flex-row-reverse justify-between gap-6'>
            <div className='md:w-1/3'>
                <TaskStatusSection addToTask={addToTask} setAddToTask={setAddToTask} setCountProgress={setCountProgress} countProgress={countProgress} setCountResolved={setCountResolved} countResolved={countResolved}></TaskStatusSection>
            </div>
            <div className='md:w-2/3'>
                <TicketsSection ticketData={ticketData} setCountProgress={setCountProgress} countProgress={countProgress} setAddToTask={setAddToTask} addToTask={addToTask}></TicketsSection>
            </div>
        </div>
    );
};

export default Main;