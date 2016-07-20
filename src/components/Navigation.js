import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleEditionFilter } from '../actions'

export default class Navigation extends Component {
    render() {
        const { toggleEditionFilter }  = this.props

        return (
            <div className="nav">
                <button onClick={toggleEditionFilter}>필터</button>
            </div>
        )
    }
}

export default connect(null, {
    toggleEditionFilter
})(Navigation)