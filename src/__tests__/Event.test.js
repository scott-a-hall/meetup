import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        const event = {
            created: 1586376490000,
            duration: 7200000,
            id: "269936360",
            name: "C# and .NET for Object-Oriented Programmers - Jort Rodenburg",
            date_in_series_pattern: false,
            status: "upcoming",
            time: 1600383600000,
            local_date: "2020-09-17",
            local_time: "18:00",
            updated: 1594240846000,
            utc_offset: -18000000,
            waitlist_count: 0,
            yes_rsvp_count: 61,
            venue: {
                id: 26906060,
                name: "Online event",
                repinne: true,
                country: "",
                localized_country_name: ""
            },
            is_online_event: true,
            group: {
                created: 1360593318000,
                name: "Nashville Software Beginners",
                id: 7130232,
                join_mode: "open",
                lat: 36.13999938964844,
                lon: -86.73999786376953,
                urlname: "nashville-software-beginners",
                who: "devs",
                localized_location: "Nashville, TN",
                state: "TN",
                country: "us",
                region: "en_US",
                timezone: "US/Central"
            },
            link: "https://www.meetup.com/nashville-software-beginners/events/269936360/",
            description: "<p>Moving to a new language can be both daunting and exciting, but one big hurdle often stands in your way: there are no intermediate resources out there. Everything is either “Learn programming by using language X”, or “Obscure Features explained: An academic dive into language X”. This is the answer. You already have experience in an object-oriented language, so why cover what an object is? or what polymorphism is? This talk goes into what clean, idiomatic C# is and how to write it. You will learn the pros and cons of C# and .NET, what it does better than another language, and how it is compiled. We even look at some Intermediate Language! The talk assumes experience in Object-Oriented Programming (Java, Kotlin, etc) and high-school mathematics. Programmers with experience in other languages such as Go, JavaScript, C++, and Python will still find this talk informative.</p> <p>Jort Rodenburg is a software engineer and author specializing in C#. He has worked on software in a variety of fields, such as financial compliance and reporting, inkjet printing, and medical imaging. Jort has mentored and taught courses on object-oriented programming for developers proficient in a different programming language to help them get up to speed with C# and .NET. Jort is the author of “Code Like a Pro in C#”, published by Manning.</p> ",
            how_to_find_us: "https://asurion.zoom.us/j/94956824228",
            visibility: "public",
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
            "C# and .NET for Object-Oriented Programmers - Jort Rodenburg"
        );
    });
});