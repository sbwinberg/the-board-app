

export default function Task({title, date}){
    return (
    <div className="task">
        <h2 className="task__title">{title}</h2>
        <p className="task__date">{date}</p>
    </div>
    )
}