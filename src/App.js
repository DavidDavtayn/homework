import "./App.css";
import { useState } from "react";

function App() {
    const [isInput, setInput] = useState("");
    const [isTextarea, setTextarea] = useState("");
    const [isItems, setItems] = useState([]);
    const [isOpen, setOpen] = useState(false);

    const inputChange = (e) => {
        setInput(e.target.value);
    };

    const textareaChange = (e) => {
        setTextarea(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if (isInput || isTextarea) {
            const newItem = {
                text: isInput,
                description: isTextarea,
            };
            setItems([...isItems, newItem]);
            setInput("");
            setTextarea("");
            setOpen(true);
        }
    };

    const appAccordion = () => {
        setOpen(!isOpen);
    };

    return (
        <div className="App">
            <form onSubmit={submit}>
                <input
                    type="text"
                    value={isInput}
                    onChange={inputChange}
                    placeholder="Title"
                />
                <textarea
                    value={isTextarea}
                    onChange={textareaChange}
                    placeholder="Description"
                />
                <button>Add</button>
            </form>
            <div className="textadd">
                <p onClick={appAccordion}>TEXT></p>
                {isOpen && (
                    <div className="accordion">
                        {isItems.length > 0 ? (
                            isItems.map((item, index) => (
                                <div className="accordionkey" key={index}>
                                    <input value={item.text} />
                                    <textarea value={item.description} />
                                </div>
                            ))
                        ) : (
                            <p></p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
