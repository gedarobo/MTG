import React from 'react';
import {render} from 'react-dom';
import DeckManager from './components/DeckManager';
import './styles/deckManager.css';

render(
    <DeckManager/>,
    document.getElementById('app')
);