import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App(props) {
  const [cards, setCards] = useState([
    {
      title:"Pizza",
      para:"you have consumed 56 cals today"
    },
    {
      title:"Burger",
      para:"you have consumed 69 cals today"
    },
    {
      title:"Coke",
      para:"you have consumed 500 cals today"
    },
    {
      title:"Brownie",
      para:"you have consumed 180 cals today"
    },
    {
      title:"Fried Rice",
      para:"you have consumed 90 cals today"
    },
    {
      title:"Lassagna",
      para:"you have consumed 200 cals today"
    },
    {
      title:"Pani Puri",
      para:"you have consumed 10 cals today"
    }
  ]);
  return (
    <div>
      <h1>Calorie Chart (Day 20)</h1>
      <div className="App">
      {cards.map((card,index)=>(
        <Card key={index} index={index} card={card} cards={cards} setCards={setCards}/>
      ))}
    </div>
    </div>
    
  );
}

export default App;
