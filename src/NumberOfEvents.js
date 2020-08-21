import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        events: 32
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ events: value });
    }

    render() {
        return (
            <div className="NumberOfEvents">
                <input
                    type="text"
                    className="events"
                    value={this.state.events}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents