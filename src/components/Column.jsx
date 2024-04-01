// import Task from "./Task"
// import TaskModal from "./TaskModal"

// export default function Column({ todo, name, handleDelete, id, ...props }) {
//     return (
//             <div className="column">
//                 <h2 className="column__title">{name}</h2>
//                     <div className="task__container">
//                         {todo.map(task => <Task task={task} key={task.id} handleDelete={handleDelete}/> )}
//                     </div>
//                 {id === 1 && (
//                     <TaskModal 
//                         title={props.title}
//                         setTitle={props.setTitle}
//                         description={props.description}
//                         setDescription={props.setDescription}
//                         handleSubmit={props.handleSubmit}
//                     />
//                 )}
//             </div>
//     )
// }