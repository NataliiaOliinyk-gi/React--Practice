

import ListItem from "./ListItem/ListItem";

const List = ({ taskItems = [] , onDeleteTask}) => {

    const elements = taskItems.map(item =>
        <ListItem key={item.id} {...item} onDeleteTask={onDeleteTask} />
    )

    return (
        <div>
            {elements}
        </div>
    )
};

export default List;