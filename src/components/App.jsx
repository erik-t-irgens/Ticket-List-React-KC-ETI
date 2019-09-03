
import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import Nav from "./Nav";
import Search from "./AutoComplete";
import AutoCompleteText from "./AutoComplete";

function App() {
    return (
        <div>
            <AutoCompleteText />
            <Nav />
            <Header />
            <TicketList />



        </div>
    );
}

export default App;