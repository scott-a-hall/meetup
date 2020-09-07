import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        events: 32,
        errorText: ''
    }


    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ events: value });
        this.props.updateEvents(null, null, value);

        if (value < 1) {
            this.setState({
                errorText: 'Number has to be greater than 0',
            });
        } else {
            this.setState({
                errorText: '',
            });
        }
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
                <ErrorAlert text={this.state.errorText} />
            </div>
        );
    }
}

export default NumberOfEvents