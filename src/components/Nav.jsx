import React from "react";
import PropTypes from "prop-types";
import SearchField from "react-search-field";


var NavBar = () => {
    return {



        width: "100px",
        height: "100px",
        padding: "10px",


    }
}

var NavText = () => {
    return {
        padding: "5px",
        border: "2px solid grey"

    }
}


function Nav() {
    return (

        <div style={NavBar()}>
            <span style={NavText()}>Home</span>
            <span style={NavText()}>Notifications</span>
            <span style={NavText()}>Messages</span>






        </div >
    );
}


export default Nav;