import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchDetail } from '../actions'

class DetailPage extends Component {
    componentDidMount() {
        this.props.fetchDetail(this.props.params.id)
    }

    render() {
        const { detail } = this.props

        console.log(detail)

        return (
            <div>
                <div></div>
            </div>
        )
    }
}

DetailPage.propTypes = {
    detail: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    const {
        detail: {
            entities
        }
    } = state

    return {
        detail: entities && entities.cardList[ownProps.params.id] || {}
    }
}

export default connect(mapStateToProps, {
    fetchDetail
})(DetailPage)