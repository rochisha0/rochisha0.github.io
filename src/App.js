import React from 'react';
import './App.css';
import logo from './images/my-pic.jpg';
import finance from './images/finance.jpeg'
import books from './images/books.jpg'
import plotly from './images/plotly.png'
import qiskit from './images/qiskit.png'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div mdl-layout mdl-js-layout mdl-layout--fixed-header>
    <Header />
        <main class="mdl-layout">
        <div class=" margin-main" id="about"></div>
            <div class="mdl-grid portfolio-max-width" >
                <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text mdl-layout">ABOUT</h2>
                    </div>
                     
                    <div class="container">
                    <p class="text">
                               Hello there! Welcome to my website. 
                            </p>
                            <p class="text">
                              I am 
                            </p>
                            <p class="text margin-bottom">
                             <strong class="name">Rochisha Agarwal</strong>. 
                            </p>

                        <img src={logo} class="img-responsive" alt="my-pic" />
                       
                        </div>
                    <div class="mdl-grid portfolio-copy">
                        <div class="container">
                            
                            <p class="text">
                            I love all <strong>quantum </strong>stuff. 
                            </p>
                            <p class="text">
                            I am currently pursuing <strong>Physics</strong> at <strong>Indian Institute of Technology Roorkee</strong>. 
                            </p>
                            <p class="text">
                             In my free time I like solving mathematical puzzles and developing websites. 
                            </p>
                            <p class="text">
                            I also adore thriller novels, political dramas and vintage fashion. 
                            </p>
                            <p class="text">
                            Don't forget to check my blogs and projects!
                            </p>
                            <p class="text">
                            Follow me at: 
                            </p>
                            <a href="https://github.com/rochisha0">
                             <i class="fa fa-github margin-left-small fa-lg"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/rochisha-agarwal-1b3aa118b/">
                              <i class="fa fa-linkedin margin-left-small"></i>
                            </a>
                            <a href="https://medium.com/@rochishaagarwal">
                            <i class="fa fa-medium margin-left-small"></i>
                            </a>
                            <a href="https://twitter.com/AgarwalRochisha">
                                <i class="fa fa-twitter margin-left-small"></i>
                            </a>
                            <p class="text">Or contact me at: <strong>rochisha.agarwal2302[at]gmail.com</strong></p>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div class=" margin-main" id="projects"></div>
            <div class="mdl-grid portfolio-max-width">
                <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text mdl-layout">PROJECTS</h2>
                    </div>
                    
                    <div class="mdl-grid portfolio-copy">
                        <div class="container">
                            <p class="text">
                             <strong> Stock picking through Variational Quantum Eigensolver</strong>
                            </p>
                            <div class="img-responsive">
                            <a href="https://github.com/rochisha0/stock-picking-qiskit">
                               <img src={finance} height="175" width="300" class="margin-bottom"></img>
                            </a>
                            </div>
                            <p class="text">
                             <strong> ShareStories (Web app on PHP) </strong>
                            </p>
                            <div class="img-responsive margin-bottom">
                            <a href="https://github.com/sdswoc/sharestories">
                               <img src={books} height="175" width="300"></img>
                            </a>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div class=" margin-main" id="blog"></div>
            <div class="mdl-grid portfolio-max-width" id="blogs">
                <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text mdl-layout ">BLOGS</h2>
                    </div>
                    <div class="mdl-grid portfolio-copy">
                        <div class="container">
                            <p class="text">
                             <strong> Interative Visualizations through Plotly</strong>
                            </p>
                            <div class="img-responsive">
                            <a href="https://medium.com/analytics-vidhya/introducing-plotly-for-interactive-visualizations-9d08792fc90c">
                               <img src={plotly} height="175" width="300" class="margin-bottom"></img>
                            </a>
                            </div>
                            <p class="text">
                             <strong> How I became a Qiskit Advocate</strong>
                            </p>
                            <div class="img-responsive">
                            <a href="https://medium.com/@rochishaagarwal/how-i-became-a-qiskit-advocate-601cf59536cc">
                               <img src={qiskit} height="175" width="300" class="margin-bottom"></img>
                            </a>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            <Footer />
        </main>
        </div>
  );
}

export default App;
