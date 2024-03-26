import { useState } from "react"

export default function Task({title, date}){

    const [isOpen, setIsOpen] = useState(false);
    function handleClick() {
        setIsOpen(prev => !prev);
    }

    return (
    <div className="task">
        <h2 className="task__title">{title}</h2>
        <p className="task__date">{date}</p>
    </div>
    )
}