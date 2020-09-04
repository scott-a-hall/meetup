import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('By default, when the user opens the app, the number of events is set to 32', ({ given, when, then }) => {
        given('the user hasnt specified the number of events per page', () => {

        });
        let AppWrapper;
        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });
        then('the default output is 32', () => {
            expect(AppWrapper.find('.Event').length).toBeLessThanOrEqual(32);
        });
    });
    test('The user is able to specify the number of events displayed per page', ({ given, when, then }) => {
        let AppWrapper;
        given('the app is open', () => {
            AppWrapper = mount(<App />);
        });
        when('the user inputs the number of events to view per page', () => {
            AppWrapper.find('.NumberOfEvents').simulate('change', { target: { value: 12 } });
        });
        then('the output renders the specified number of events', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            expect(NumberOfEventsWrapper.state('events')).toBe(32)
        });
    });
})