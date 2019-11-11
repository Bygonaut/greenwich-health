import React from "react";
import PropTypes from "prop-types";

const studySections = {
    0: 'Yes, you are being informed about this this study',
    1: 'Lorem ip sum! lol'
}

export default function Study(props) {
    return (
        <div>{studySections[props.sectionId]}</div>
    )
}

Study.defaultProps = {
    sectionId: 1
}