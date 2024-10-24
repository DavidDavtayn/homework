function TodoFooter({ todos }) {
    const completedSize = todos.filter((todo) => todo.isComplrted).length;

    return (
        <div>
            <span>
                {completedSize}/{todos.length} Completed
            </span>
            <button>Clear Completed</button>
        </div>
    );
}

export default TodoFooter;
