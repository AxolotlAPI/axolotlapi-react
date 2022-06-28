import "../../css/Card.css";

export default function Card({ children, title }) {
    return (
        <div className="card">
            <span className="card-title">
                {title}
            </span>
            <div>
                {children}
            </div>
        </div>
    )
}