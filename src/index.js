import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    <App />
  </React.StrictMode>
);

// Add the favicon dynamically
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = 'logo.png';
document.head.appendChild(link);

// Set the document title
document.title = 'Brinca Festas';

const numBalls = 50;
const balls = [];
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];


function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];


  ball.style.left = `${getRandomPosition(window.innerWidth)}px`; 
  ball.style.top = `${getRandomPosition(window.innerHeight)}px`; 

  
  const ballSize = Math.random() * 0.8 + 0.3; 
  ball.style.transform = `scale(${ballSize})`; 
  ball.style.width = `${ballSize}em`; 
  ball.style.height = ball.style.width;

  
  ball.style.position = 'fixed';

  balls.push(ball);
  document.body.append(ball);
}


balls.forEach((el, i) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, 
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});



reportWebVitals();