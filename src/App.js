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
          if (event.key==="ArrowLeft") {
            angle += 40;
          }
          carousel.style.transform = "rotateY(" + angle + "deg)";
        }} tabIndex="0">
          <div key={1} className="carousel__cell">
            <img src={require('./images/1.jpg')} alt="1.jpg"/>
          </div>
          <div key={2} className="carousel__cell">
            <img src={require('./images/2.jpg')} alt={"2.jpg"}/>
          </div>
          <div key={3} className="carousel__cell">
            <img src={require('./images/3.jpg')} alt={"3.jpg"}/>
          </div>
          <div key={4} className="carousel__cell">
            <img src={require('./images/4.jpg')} alt={"4.jpg"}/>
          </div>
          <div key={5} className="carousel__cell">
            <img src={require('./images/5.jpg')} alt={"5.jpg"}/>
          </div>
          <div key={6} className="carousel__cell">
            <img src={require('./images/6.jpg')} alt={"6.jpg"}/>
          </div>
          <div key={7} className="carousel__cell">
            <img src={require('./images/7.jpg')} alt={"7.jpg"}/>
          </div>
          <div key={8} className="carousel__cell">
            <img src={require('./images/8.jpg')} alt={"8.jpg"}/>
          </div>
          <div key={9} className="carousel__cell">
            <img src={require('./images/9.jpg')} alt={"9.jpg"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

function Modal() {
  return (
    <div>
      <div id="container">
        <h2>Lorem Ipsum</h2>
        <div id="lorem-ipsum"/>
      </div>
      <div id="modal" className="modal-overlay" onClick={event=>{
        if (event.target.classList.contains('modal-overlay')) {
          event.target.style.display = "none";
          let modalWindow = document.querySelector('.modal-window')
          modalWindow.style.transform = "translateY(0px)";
        }
      }}>
        <div className="modal-window">
          <div className="title">
            <h2>모달</h2>
          </div>
          <div className="close-area" onClick={event=>{
            const modal = document.getElementById('modal');
            modal.style.display = "none";
          }}>X</div>
          <div className="content">
            <p>가나다라마바사 아자차카타파하</p>
            <p>가나다라마바사 아자차카타파하</p>
            <p>가나다라마바사 아자차카타파하</p>
            <p>가나다라마바사 아자차카타파하</p>

          </div>
        </div>
      </div>
    </div>
  )
}

function ModalButton() {
  return (
    <div>
      <button onClick={event=>{
        let modal = document.getElementById('modal');
        let modalWindow = document.querySelector('.modal-window');
        modal.style.display = "flex";
        setTimeout(function(){
          modalWindow.style.transform = "translateY(-500px)";
        },100);
      }} tabIndex="-1">Modal Button</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Hover/>
      <Modal/>
      <ModalButton/>
    </div>
  );
}

export default App;
