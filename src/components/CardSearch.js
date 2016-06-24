import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

class CardSearch extends Component {
    searchCard() {
        const input = findDOMNode(this.refs.input);
        const searchKeyword = input.value.trim();
        this.props.onSearchClick(searchKeyword);
    }

    enterKey(event) {
        if (event.keyCode === 13) {
            this.searchCard();
        }
    }

    componentDidMount() {
        const input = findDOMNode(this.refs.input);
        input.focus();
    }

    render() {
        return (
            <header>
                <div className="search_area">
                    <fieldset>
                        <input className="search_input" type="text" ref="input" onKeyUp={this.enterKey.bind(this)}/>
                        <button className="search_btn" onClick={this.searchCard.bind(this)}>SEARCH</button>
                    </fieldset>
                </div>
            </header>
        );
    }
};

export default CardSearch;