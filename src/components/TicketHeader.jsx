import React from "react";
import PropTypes from "prop-types";
function TicketHeader(props) {
    return (
        <div>
            <h3>{props.location}</h3>


        </div>
    );
}

TicketHeader.propTypes = {
    location: PropTypes.string,
};
export default TicketHeader;