import "./App.css";
import { useState } from "react";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const appAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="App">
            <form>
                <input type="text" placeholder="Title"></input>
                <textarea placeholder="Description"></textarea>
                <button>Add</button>
            </form>
            <div className="textadd">
                <p onClick={appAccordion}>TEXT></p>

                {isOpen && (
                    <div className="acrdion">
                        <input />
                        <textarea></textarea>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
