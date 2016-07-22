import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'

export default class CardSearch extends Component {
    searchCard() {
        const input = findDOMNode(this.refs.input)
        const searchKeyword = input.value.trim()
        this.props.onSearchClick(searchKeyword)
    }

    enterKey(event) {
        if (event.keyCode === 13) {
            this.searchCard()
        }
    }

    componentDidMount() {
        const input = findDOMNode(this.refs.input)
        input.focus()
    }

    render() {
        return (
            <header>
                <div className="search_area">
                    <button className="search_btn" onClick={this.searchCard.bind(this)}>SEARCH</button>
                    <fieldset>
                        <label>Name</label>
                        <input className="search_input" type="text" ref="input" onKeyUp={this.enterKey.bind(this)}/>
                        <label>Oracle</label>
                        <input className="search_input" type="text" ref="input" onKeyUp={this.enterKey.bind(this)}/>
                    </fieldset>
                </div>
            </header>
        )
    }
};

CardSearch.propTypes = {
    onSearchClick: PropTypes.func.isRequired
}