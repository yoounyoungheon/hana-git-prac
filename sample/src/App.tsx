import './App.css'
import Checkbox from './CheckBox';
// import DarkAndLight from './DarkAndLight';
import DecreaseButton from './DecreaseButton'
// import TextInput from './TextInput';
import ToDoList from './ToDoList';
import Welcome from './Welcome'

function App() {
  const myName: string = "영헌";
  return (
    <>
      <Welcome name = { myName } />
      <DecreaseButton/>
      <Checkbox/>
      <ToDoList/>
    </>
  )
}

export default App
