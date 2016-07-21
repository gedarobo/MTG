import React, { PropTypes } from 'react'

const Detail = ({ detail, edition }) => (

    <div>
        <img src={edition.image_url} />
    </div>
)

export default Detail;

Detail.propTypes = {
    card: PropTypes.object.isRequired,
    edition: PropTypes.object.isRequired
}