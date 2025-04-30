

const ExpenseItem = ({ id, name, amount, onDelete }) => {
    return (
        <li>
            {name} - ${amount}
            <button onClick={() => onDelete(id)}>Delete</button>
        </li>
    )
};

export default ExpenseItem;