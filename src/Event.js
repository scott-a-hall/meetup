import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

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
        const event = this.props.event;
        const rsvpData = [{ name: "Reserved", value: event.yes_rsvp_count }, { name: "Free slots", value: (event.rsvp_limit - event.yes_rsvp_count) }];
        const colors = ["#20AE31", "#5C4A8E"];

        return (
            <div className="Event">
                <div className="event-overview">
                    <p className="event-name">{this.props.event.name}</p>
                    <p className="event-date">{this.props.event.local_date}</p>
                    <p className="event-time">{this.props.event.local_time}</p>
                    {event.rsvp_limit &&
                        <ResponsiveContainer height={200} width={600}>
                            <PieChart>
                                <Pie data={rsvpData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} label>
                                    {
                                        rsvpData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index]} />
                                        ))
                                    }

                                </Pie>
                                <Legend verticalAlign="middle" align="left" />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    }
                    {!event.rsvp_limit &&
                        <p>{event.yes_rsvp_count} people coming</p>}

                    <button
                        className="show-details-btn"
                        onClick={() => this.handleShowDetails()}>
                        Show Details
                    </button>
                    {this.state.showDetails && (
                        <div className="event-details">
                            <p className="event-description">
                                {this.props.event.description}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Event;