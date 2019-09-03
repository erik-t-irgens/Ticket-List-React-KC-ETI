import React from "react";
import Ticket from "./Ticket";
import TicketHeader from "./TicketHeader";


var masterTicketList = [
    {
        names: 'Thato and Haley',
        location: '3A',
        issue: 'Firebase won\'t save record. Halp.'
    },
    {
        names: 'Sleater and Kinney',
        location: '4B',
        issue: 'Fox image not displaying on page, can only see duck?'
    },
    {
        names: 'Imani & Jacob',
        location: '9F',
        issue: 'Donkey picture not displaying on hover in Zoology app. :('
    }
];



function TicketList() {
    var getStyle = () => {
        return {
            color: "lightgrey",
            background: "black"

        }
    }
    return (
        <div style={getStyle()}>
            <hr />
            {masterTicketList.map((ticket, index) =>
                [
                    <TicketHeader location={ticket.location} />,
                    <Ticket names={ticket.names}

                        issue={ticket.issue}
                        key={index} />

                ]
            )}
        </div>
    );
}

export default TicketList;