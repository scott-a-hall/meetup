import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.events')).toHaveLength(1);
    });

    test('render default number of events', () => {
        expect(NumberOfEventsWrapper.find('.events').prop('value')).toBe(32);
    });

    test('change state when text input changes', () => {
        const eventNumber = { target: { value: 12 } };
        NumberOfEventsWrapper.find('.events').simulate('change', eventNumber);
        expect(NumberOfEventsWrapper.state('events')).toBe(12);
    });
});