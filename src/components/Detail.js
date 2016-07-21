import React, { PropTypes } from 'react'

const Detail = ({ detail, edition }) => (

    <div>
        <div>
            <img src={edition.image_url} />
        </div>
        <div>
            <p>{detail.name}</p>
            <p>{detail.cost}</p>
            <p>{detail.supertypes && detail.supertypes.join(' ')}</p>
            {detail.subtypes ? (<p>{detail.types && detail.types.join(' ')} - {detail.subtypes && detail.subtypes.join(' ')}</p>) : (<p>{detail.types && detail.types.join(' ')}</p>)}
            <pre>{detail.text}</pre>
            {detail.power && (<p>{detail.power} / {detail.toughness}</p>)}
        </div>
    </div>
)

export default Detail;

Detail.propTypes = {
    detail: PropTypes.object.isRequired,
    edition: PropTypes.object.isRequired
}