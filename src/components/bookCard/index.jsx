import "./style.css";

export default function BookCard({ url, name }) {
    return (
        <div className="bookCard">
            <div className="bookImage">
                <img src={url} alt="book_name" />
            </div>
            <h2>{name}</h2>
            <p>#price</p>
        </div>
    );
}
