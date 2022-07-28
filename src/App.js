import './App.css';
import {useState} from 'react';

function Hover() {
  let angle = 0;
  let carousel;

  return (
    <div>
      <div className="scene">
        <div className="carousel" onKeyDown={(event)=> {
          if (carousel===undefined) {
            carousel = document.querySelector('.carousel');
          }
          console.log(event.key);
          if (event.key==="ArrowRight") {
            angle -= 40;
          }
          else if (event.key==="ArrowLeft") {
            angle += 40;
          }
          carousel.style.transform = "rotateY(" + angle + "deg)";
        }} tabIndex="0">
          <div key={1} className="carousel__cell">1</div>
          <div key={2} className="carousel__cell">2</div>
          <div key={3} className="carousel__cell">3</div>
          <div key={4} className="carousel__cell">4</div>
          <div key={5} className="carousel__cell">5</div>
          <div key={6} className="carousel__cell">6</div>
          <div key={7} className="carousel__cell">7</div>
          <div key={8} className="carousel__cell">8</div>
          <div key={9} className="carousel__cell">9</div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div id="body">
      <Hover/>
    </div>
  );
}


export default App;
