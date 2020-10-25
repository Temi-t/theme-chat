import React from 'react';

export default function TasksList({ allTasks, handleDelete, handleDone }) {
    return(
        <ul >
            {allTasks.map(({title, description, id}, index) => (
                    <li key={id} index={index} className='toDoTitle'>
                        <div  >
                            <h2 > {title } </h2>
                            <button className='done-btn' onClick={()=>handleDone(index)}>Done</button>
                            <button onClick={() => handleDelete(id)}>X</button>
                        </div>
                        {!description ? null : <p>{description}</p>}
                    </li>
                ))}
        </ul>
        

    );
};


// (index) => {
//     const newTasks = [...allTasks];
//     newTasks[index].isCompleted = true;
//     setAllTasks(newTasks);
//   }




// <ul>
//             {allTasks =>(
//                 allTasks.map(({title, description, id}) => (
//                     <li key={id}>
//                         <div>
//                             <h2>{title}</h2>
//                             <button onClick={() => handleDelete(id)}>X</button>
//                         </div>
//                         {!description ? null : <p>{description}</p>}
//                         {/* {console.log(description)} */}
//                     </li>
//                 ))
//             )}
//         </ul>