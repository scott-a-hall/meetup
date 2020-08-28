import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.events')).toHaveLength(1);
    });

    test('render text input correctly', () => {
        const numberOfEvents = NumberOfEventsWrapper.state('events');
        expect(NumberOfEventsWrapper.find('.events').prop('value')).toBe(numberOfEvents);
    });

    test('change state when text input changes', () => {
        const eventNumber = { target: { value: 32 } };
        NumberOfEventsWrapper.find('.events').simulate('change', eventNumber);
        expect(NumberOfEventsWrapper.state('events')).toBe(32);
    });
});

describe('<NumberOfEvents /> integration', () => {
    test('set default number of events to 32', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        NumberOfEventsWrapper.update();
        expect((NumberOfEventsWrapper.find('.event')).length).toBeLessThanOrEqual(32);
    });
    test('user can change number of events', () => {
        const NumberOfEventsWrapper = mount(<NumberOfEvents />);
        const eventNumber = { target: { value: 12 } };
        NumberOfEventsWrapper.find('.events').simulate('change', eventNumber);
        NumberOfEventsWrapper.setState({ numberOfEvents: 12 });
        expect(NumberOfEventsWrapper.state('events')).toBe(12);
    });
});