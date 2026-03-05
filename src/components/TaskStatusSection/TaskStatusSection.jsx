import React, { useState } from 'react';
import { toast } from 'react-toastify';

const TaskStatusSection = ({addToTask, setAddToTask,setCountProgress,countProgress,setCountResolved,countResolved}) => {

    const [addToResolved, setAddToResolved] = useState([])

    const handleComplete = (task, index) => {
        toast.success("Task Complete")

        const newAddToTask = addToTask.filter((task, i)=> i !== index)
        setAddToTask(newAddToTask)

        setCountProgress(countProgress - 1)

        setCountResolved(countResolved + 1)


        const newAddToResolved = [...addToResolved, task]
        setAddToResolved(newAddToResolved)
    }
    return (
        <div className='my-10'>
            <div>
                <h2 className='text-xl font-bold mb-4'>Task Status</h2>
                
                {addToTask.length > 0? addToTask.map((task, index) => <div key={index} className='bg-white p-4 mb-4'>
                    <h3>{task.title}</h3>
                    <button onClick={()=>handleComplete(task, index)} className='btn w-full mt-4 bg-green-600 text-white'>Complete</button>
                </div>) : <p>Select a ticket to add to Task Status</p>}
            </div>
            <div className='mt-8'>
                <h2 className='text-xl font-bold mb-4'>Resolved Task</h2>
                {addToResolved.length > 0? addToResolved.map(resolved => <h3 key={resolved.id} className='bg-blue-200 p-4 mb-4'>{resolved.title}</h3>) : <p>No resolved tasks yet.</p>}
            </div>
        </div>
    );
};

export default TaskStatusSection;