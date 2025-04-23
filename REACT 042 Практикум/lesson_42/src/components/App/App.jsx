import Theme from "../../context/Theme";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

function App() {


  return (
    <Theme>
      <TextInput />
      <Button>Display Text</Button>

      <ButtonGroup />
    </Theme>
  )
}

export default App
