import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
import {choice, remove} from './helpers'
import fruits from './foods'
import reportWebVitals from './reportWebVitals';



let fruitChoice = choice(fruits)
console.log(`I'd like one ${fruitChoice}, please.`)
console.log(`Here you go: ${fruitChoice}`)
console.log('Delicious! May I have another?')
remove(fruits, fruitChoice)
let fruitsLeft  = fruits.length
console.log(`I'm sorry, we're all out. We have ${fruitsLeft} left.`)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

