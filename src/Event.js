import React, { Component } from 'react';

class Event extends Component {
    state = {
        showDetails: false,
    };

    handleShowDetails = () => {
        if (this.state.showDetails === false) {
            this.setState({ showDetails: true });
        } else {
            this.setState({ showDetails: false });
        }
    };

    render() {
        return (
            <div className="Event">
                <div className="event-overview">
                    <p className="event-name">{this.props.event.name}</p>
                    <p className="event-date">{this.props.event.local_date}</p>
                    <p className="event-time">{this.props.event.local_time}</p>
                    <button
                        className="show-details-btn"
                        onClick={() => this.handleShowDetails()}>
                        Show Details
                    </button>
                </div>
                {this.state.showDetails && (
                    <div className="event-details">
                        <p className="event-description">
                            {this.props.event.description}
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

export default Event;