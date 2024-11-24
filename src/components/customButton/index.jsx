import "./style.css";

export default function CustomButton({ url, content }) {
    return (
        <button className="customButton">
            <a href={url}>{content}</a>
        </button>
    );
}
