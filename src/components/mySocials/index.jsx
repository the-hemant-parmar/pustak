import CustomButton from "../customButton";
import "./style.css";

export default function MySocials(second) {
    return (
        <div className="mySocials">
            <CustomButton
                url="https://github.com/the-hemant-parmar/"
                content="GitHub"
            />
            <CustomButton
                url="https://the-hemant-parmar.github.io/"
                content="Website"
            />
            <CustomButton
                url="https://www.linkedin.com/in/hemant-parmar-968543251"
                content="LinkedIn"
            />
        </div>
    );
}
