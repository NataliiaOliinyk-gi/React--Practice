import { useState } from 'react';
import { IconButton, Input, InputGroup, List } from 'rsuite';

import PlusIcon from '@rsuite/icons/Plus';

import './App.css'

const styles = {
  width: 300,
  marginBottom: 10
};

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  // const handleChange = (value) => {
  //   console.log(value);
    
  //   setNewItem(value)
  // }

  const addItem = () => {
    setItems(prevItems =>
      [...prevItems, newItem]
    );
    setNewItem('');
  }

  const elements = items.map(item => <List.Item key={item}>{item}</List.Item>)

  return (
    <>
      <InputGroup style={styles}>
        <Input onChange={setNewItem} value={newItem}/>
        <IconButton onClick={addItem} icon={<PlusIcon />} appearance="primary" />
      </InputGroup>

      <List bordered>
        {elements}
      </List>
    </>
  )
}

export default App
