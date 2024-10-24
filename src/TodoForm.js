import { useState } from "react";

function TodoForm() {
    const [text, setText] = useState("");
    return (
        <form>
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button>Add</button>
        </form>
    );
}

export default TodoForm;
