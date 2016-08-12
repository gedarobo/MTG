import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'

export default class CardSearch extends Component {
    searchCard() {
        const name = findDOMNode(this.refs.name).value.trim()
        const oracle = findDOMNode(this.refs.oracle).value.trim()
        const color = findDOMNode(this.refs.color).value.trim()
        const type = findDOMNode(this.refs.type).value.trim()

        this.props.onSearchClick({
            name,
            oracle,
            color,
            type
        })
    }

    enterKey(event) {
        if (event.keyCode === 13) {
            this.searchCard()
        }
    }

    componentDidMount() {
        const input = findDOMNode(this.refs.name)
        input.focus()
    }

    render() {
        return (
            <header>
                <div className="search_area">
                    <button className="search_btn" onClick={this.searchCard.bind(this)}>SEARCH</button>
                    <fieldset>
                        <label>Name</label>
                        <input className="search_input" type="text" ref="name" onKeyUp={this.enterKey.bind(this)}/>
                        <label>Oracle</label>
                        <input className="search_input" type="text" ref="oracle" onKeyUp={this.enterKey.bind(this)}/>
                        <label>Color</label>
                        <select ref="color">
                            <option value="">-</option>
                            <option value="white">White</option>
                            <option value="blue">Blue</option>
                            <option value="black">Black</option>
                            <option value="green">Green</option>
                            <option value="red">Red</option>
                        </select>
                        <label>Type</label>
                        <select ref="type">
                            <option value="">-</option>
                            <option value="artifact">Artifact</option>
                            <option value="creature">Creature</option>
                            <option value="enchantment">Enchantment</option>
                  1          <option value="land">Land</option>
                            <option value="planeswalker">Planeswalker</option>
                            <option value="sorcery">Sorcery</option>
                            <option value="instant">instant</option>
                        </select>
                    </fieldset>
                </div>
            </header>
        )
    }
};

CardSearch.propTypes = {
    onSearchClick: PropTypes.func.isRequired
}