export default function Column({ children, title, button }) {
    return (
        <div className="column">
            <h2 className="column__title">{title}</h2>
            <div className="column__container">
                {children}
            </div>
            {button && <button className="button__add">Skapa ny Uppgift</button>}
        </div>
    )
}