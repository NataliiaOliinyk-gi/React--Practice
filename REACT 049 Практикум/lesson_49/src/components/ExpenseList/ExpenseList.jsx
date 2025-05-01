import { useDispatch, useSelector } from 'react-redux';

import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

import { addExpense, deleteExpense } from '../../redux/expenses/expenses-slice';
import { selectAllExpences } from '../../redux/expenses/expenses-selector';

const ExpenseList = () => {
    const items = useSelector(selectAllExpences);

    const dispatch = useDispatch();
    const onAddExpense = (data) => {
        dispatch(addExpense(data))
    }
    const onDeleteExpense = id => {
        dispatch(deleteExpense(id))
    }

    const elements = items.map((item) =>
        <ExpenseItem key={item.id} {...item} onDelete={onDeleteExpense} />)

    return (
        <>
            <ExpenseForm submitForm={onAddExpense} />
            {elements}
        </>
    )
}

export default ExpenseList;