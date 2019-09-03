import React from 'react';

export default class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props);
        this.items = [
            'david',
            'damien',
            'sara',
            'Jane'
        ];

    }




    render() {
        return (
            <div className="searchBar">
                <input type="text" />
                <ul>
                    {this.items.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        )
    }
}
