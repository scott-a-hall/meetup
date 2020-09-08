import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

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
        const showDetails = this.state.showDetails;
        const event = this.props.event;
        const rsvpData = [{ name: "people coming", value: event.yes_rsvp_count }, { name: "available slots", value: (event.rsvp_limit - event.yes_rsvp_count) }];

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
                {event.rsvp_limit &&
                    <ResponsiveContainer height={300} width={350}>
                        <PieChart>
                            <Pie data={rsvpData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">

                            </Pie>

                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                }
                {!event.rsvp_limit &&
                    <p>{event.yes_rsvp_count} people coming</p>}
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