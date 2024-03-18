

export default function Task({title}){
    return (
    <div className="task">
        <h2 className="task__title">{title}</h2>
        <p className="task__date">{new Date().toLocaleDateString()}</p>
    </div>
    )
}