import React, {Component} from 'react';
import CardSearch from './CardSearch';
import CardList from './CardList';

class DeckManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }

    searchCard(name) {
        //dispatch(searchName(name))
        fetch('/mtg/cards?name=' + name)
            .then(res => res.json())
            .then(data => this.setState({
                cards: data
            }))
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div>
                <CardSearch onSearchClick={this.searchCard.bind(this)}/>
                <CardList data={this.state.cards}/>
            </div>
        );
    }
};

export default DeckManager;