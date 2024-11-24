import "./style.css";

function SearchBar() {
    return (
        <div className="searchBar">
            <img
                src="threelines.png"
                height="12px"
                width="18px"
                alt="threelines"
            />
            <input type="text" placeholder="Search..." />
            <img
                src="searchIcon.png"
                height="18px"
                width="18px"
                alt="searchIcon"
            />
        </div>
    );
}

export default function NavBar({ url, name }) {
    return (
        <div className="NavBar">
            <img src="pustakLogo.png" height="80px" alt="pustakLogo" />
            <SearchBar />
        </div>
    );
}
