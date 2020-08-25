import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        const event = {
            created: 1591348394000,
            duration: 385200000,
            id: '271099242',
            name: 'International JavaScript Conference Munich 2020 - The Hybrid Conference',
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1603695600000,
            local_date: '2020-10-26',
            local_time: '08:00',
            updated: 1597742159000,
            utc_offset: 3600000,
            waitlist_count: 0,
            yes_rsvp_count: 13,
            venue: {
                id: 26495814,
                name: 'Holiday Inn München - Stadtzentrum',
                lat: 48.13063049316406,
                lon: 11.589532852172852,
                repinned: true,
                address_1: 'Hochstraße 3',
                city: 'München',
                country: 'de',
                localized_country_name: 'Germany'
            },
            is_online_event: false,
            group: {
                created: 1497515784000,
                name: 'International JavaScript Conference',
                id: 24474394,
                join_mode: 'approval',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'International-JavaScript-Conference',
                who: 'Mitglieder',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/International-JavaScript-Conference/events/271099242/',
            description: '<p>Every year in October, International JavaScript Conference Munich is where seasoned experts get together to discuss methods, libraries, services, models and algorithms to use. Keeping the current situation in mind, we announce that iJS Munich 2020 will be a Hybrid Conference - attend the conference on site or remotely from your home or office.</p> <p>We are looking forward to meeting you this year as well!</p> ',
            visibility: 'public',
            member_pay_fee: false
        };

        EventWrapper = shallow(<Event event={event} />);
    });

    test('render event div correctly', () => {
        expect(EventWrapper.find('.Event')).toHaveLength(1);
    });

    test('render event overview div only', () => {
        expect(EventWrapper.find('.Event').children()).toHaveLength(1);
    });

    test('render event-overview correctly', () => {
        expect(EventWrapper.find('.event-overview')).toHaveLength(1);
    });

    test('render event-overview children correctly', () => {
        expect(EventWrapper.find('.event-overview').children()).toHaveLength(4);
    });

    test('render show details button', () => {
        expect(EventWrapper.find('.show-details-btn')).toHaveLength(1);
    });

    test('click on show details button renders details correctly', () => {
        EventWrapper.setState({ showDetails: false });
        EventWrapper.find('.show-details-btn').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
    });

    test('render event-details correctly', () => {
        EventWrapper.setState({ showDetails: true });
        expect(EventWrapper.find('.event-details')).toHaveLength(1);
    });

    test('render event-details children correctly', () => {
        EventWrapper.setState({ showDetails: true });
        expect(EventWrapper.find('.event-details').children()).toHaveLength(1);
    });

    test('render mock data correctly', () => {
        expect(EventWrapper.find('.event-name').text()).toBe(
            "International JavaScript Conference Munich 2020 - The Hybrid Conference"
        );
    });
});