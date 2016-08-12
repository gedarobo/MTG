import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { fetchDetail } from '../actions'
import Detail from '../components/Detail'

class DetailPage extends Component {
    componentDidMount() {
        this.props.fetchDetail(this.props.params.id)
    }

    render() {
        const { detail, edition } = this.props

        return (
            <div>
                <div>
                    <button onClick={() => browserHistory.goBack() }>List</button>
                </div>
                <Detail detail={detail} edition={edition} />
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
        detail: entities && entities.cardList[ownProps.params.id] || {},
        edition: entities && entities.editions[ownProps.params.multiverseId] || {}
    }
}

export default connect(mapStateToProps, {
    fetchDetail
})(DetailPage)