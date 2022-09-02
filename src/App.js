import {useState} from 'react';
import './App.css';
import fruitsList from './fruitList';

function App() {
  const [fruits, setFruits] = useState([...fruitsList]); 

  const handleChange = event => {
    console.log(event.target.value);
    if (event.target.value !== '') {
      let filteredFruits = fruits.filter(fruit => fruit.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1) 
      setFruits(filteredFruits);
    } else {
      console.log(`fruits: ${fruits}`);
      setFruits([...fruitsList]);
    }
  }

  return (
    <div className='app'>
      <h1>Search Filter</h1>
      <div>Search: <input type="text" onChange={handleChange}/></div>
      {fruits && fruits.map((fruit,index) => <div key= {index}>{fruit}</div>)}
    </div>
  );
}

export default App;