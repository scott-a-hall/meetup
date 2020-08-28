import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        events: 32
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ events: value });
        this.props.updateEvents(null, null, value);
    }

    render() {
        return (
            <div className="NumberOfEvents">
                Show <input
                    type="text"
                    className="events"
                    value={this.state.events}
                    onChange={this.handleInputChanged}
                /> Events
            </div>
        );
    }
}

export default NumberOfEvents