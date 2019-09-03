import React from "react";
import PropTypes from "prop-types";
import TicketTextSubComponent from "./TicketTextSubComponent";
function Ticket(props) {
    return (
        <div>
            <h3>{props.names}</h3>
            <TicketTextSubComponent issue={props.issue} />
            <hr />
        </div>
    );
}

Ticket.propTypes = {
    names: PropTypes.string,
    issue: PropTypes.string
};
export default Ticket;