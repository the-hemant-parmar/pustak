import "./style.css";

function Quote() {
    return (
        <div className="quote">
            <span>
                Happiness is lending someone a book you absolutely adored
                reading .
            </span>
            <button>Sign up</button>
        </div>
    );
}

export default function Home1({ url, name }) {
    return (
        <div className="home1">
            <Quote />
            <img
                src="bookStack.png"
                height="535px"
                width="842px"
                alt="book stack"
            />
        </div>
    );
}
