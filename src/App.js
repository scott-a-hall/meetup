import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { OfflineAlert } from './Alert';

class App extends Component {

  state = {
    events: [],
    page: null,
    lat: null,
    lon: null,
    offlineText: ''
  }

  componentDidMount() {
    getEvents().then(response => this.setState({ events: response }));
  }

  updateEvents = (lat, lon, page) => {
    if (!navigator.onLine) {
      this.setState({
        offlineText: 'You are viewing these results offline. Reconnect to view updated events.',
      });
    } else {
      this.setState({
        offlineText: '',
      });
    }

    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(response => this.setState({ events: response, lat, lon }));
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(response => this.setState({ events: response, page }));
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(response => this.setState({ events: response }));
    }
  }

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <OfflineAlert text={this.state.offlineText} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;