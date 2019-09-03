import React from "react";
import PropTypes from "prop-types";
function TicketTextSubComponent(props) {
    return (
        <div>
            <p>{props.issue}</p>
            <p><em>{props.issue}</em></p>

        </div>
    );
}

TicketTextSubComponent.propTypes = {

    issue: PropTypes.string
};
export default TicketTextSubComponent;