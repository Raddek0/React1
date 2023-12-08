import logo from './logo.svg';
import './App.css';
import {FacultyH, FacultyD} from './components/zawody';
import StyledButton from './components/styled_button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FacultyH/>
        <FacultyD/>
        <StyledButton onClick={console.log(5)} label={'cos'}/>
      </header> 
    </div>
  );
}

export default App;
