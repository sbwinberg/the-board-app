

export default function Column({ children, title }) {
    return (
        <div className="column">
            <h2 className="column__title">{title}</h2>
            <div className="task__container">
                {children}
            </div>
        </div>
    )
}