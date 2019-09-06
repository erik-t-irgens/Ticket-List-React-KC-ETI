import React from 'react';

function NewTicketForm() {
    let _names = null;
    let _location = null;
    let _issue = null;

    function handleNewTicketFormSubmission(event) {
        event.preventDefault();
        _names.value = '';
        _location.value = '';
        _issue.value = '';
    }

    return (
        <div>
            <form onSubmit={handleNewTicketsFormSubmission}>
                <input
                    type='text'
                    id='names'
                    placeholder='Pair Names'
                    ref={(input) => { _names = input; }} />
                <input
                    type='text'
                    id='location'
                    placeholder='Location'
                    ref={(input) => { _names = input; }} />
                <textarea
                    id='issue'
                    placeholder='Describe your issue.'
                    ref={(input) => { _names = input; }} />
                <button type='submit'>Help!</button>
            </form>
        </div>
    );
}

export default NewTicketForm;