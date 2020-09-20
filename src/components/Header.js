import React from 'react';
import '../App.css';

function Header() {
    return (
        <div>
        <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
            <div class="mdl-layout__header-row portfolio-logo-row">
                <span class="mdl-layout__title">
                    <div class="portfolio-logo">Rochisha Agarwal</div>
                </span>
            </div>
            <div class="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
                <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
                    <a class="mdl-navigation__link is-active" href="#about">About</a>
                    <a class="mdl-navigation__link" href="#projects">Projects</a>
                    <a class="mdl-navigation__link" href="#blog">Blog</a>
                    <a class="mdl-navigation__link" href="https://github.com/rochisha0/Resume/blob/master/Resume%20Quantum%20Computing%20(1).pdf">Resume</a>
                </nav>
            </div>
        </header>
        <div class="mdl-layout__drawer mdl-layout--small-screen-only">
            <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
                <a class="mdl-navigation__link is-active" href="#about">About</a>
                    <a class="mdl-navigation__link" href="#projects">Projects</a>
                    <a class="mdl-navigation__link" href="#bog">Blog</a>
                    <a class="mdl-navigation__link" href="">Resume</a>
            </nav>
        </div>
        </div>
    );

    }

    export default Header