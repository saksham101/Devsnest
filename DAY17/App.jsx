import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="tle">Calorie Read Only
    <div className="App">
     
      <Card title="Pizza" p="you have consumed 56 cals today"/>
      <Card title="Burger" p="you have consumed 69 cals today"/>
      <Card title="Coke" p="you have consumed 500 cals today"/>
      <Card title="Browne" p="you have consumed 180 cals today"/>
      <Card title="Fried Rice" p="you have consumed 90 cals today"/>
      <Card title="Lassagna" p="you have consumed 200 cals today"/>
      <Card title="Pani Puri" p="you have consumed 10 cals today"/>
</div>
    </div>
  );
}

export default App;
