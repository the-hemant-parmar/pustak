import BookCard from "../bookCard";
import "./style.css";

export default function MidSection(second) {
    return (
        <div className="midSection">
            <BookCard
                url={
                    "https://m.media-amazon.com/images/I/61lQ+BprouL._SY466_.jpg"
                }
                name={"The psychology of Money"}
            />
            <BookCard
                url={
                    "https://m.media-amazon.com/images/I/81F90H7hnML._SY466_.jpg"
                }
                name={"Atomic Habits"}
            />
            <BookCard
                url={
                    "https://m.media-amazon.com/images/I/61CIKpN5QjL._SY466_.jpg"
                }
                name={"Think and Grow Rich"}
            />
        </div>
    );
}
// import "./style.css";
// import MyPhoto from "../myPhoto";
// import Description from "../description";

// export default function MidSection(second) {
//     return (
//         <div className="midSection">
//             <MyPhoto />
//             <Description />
//         </div>
//     );
// }
