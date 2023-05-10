import './App.css';
import Container from './components/Container/Container';
import characters from './data.js';

function App() {
  return (
    <div className="">
      <Container characters={characters} />
    </div>
  );
}

export default App;
