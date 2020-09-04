import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('By default, when user opens the app, only the event name is displayed', ({ given, when, then }) => {
        given('the event element is collapsed by default', () => {

        });
        when('the user opens the app', () => {
            AppWrapper = mount(<App />)
        });
        then('only the event names are on display', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.Event .event-details')).toHaveLength(0);
        });
    });
    test('User should be able to expand the details of their event', ({ given, when, then }) => {
        given('the event app is open', () => {
            AppWrapper = mount(<App />);
        });
        when('the user selects their event', () => {
            AppWrapper.update();
            AppWrapper.find('.Event .show-details-btn').at(0).simulate('click');
        });
        then('the event details list is expanded', () => {
            expect(AppWrapper.find('.Event .event-details')).toHaveLength(1);
        });
    });
    test('Once details are expanded, user should be able to hide the details', ({ given, and, when, then }) => {
        given('the event app is open', () => {
            AppWrapper = mount(<App />)
        });
        and('the event details are expanded', () => {
            AppWrapper.update();
            AppWrapper.find('.Event .show-details-btn').at(0).simulate('click');
            expect(AppWrapper.find('.Event .event-details')).toHaveLength(1);
        });
        when('the user clicks on the details', () => {
            AppWrapper.update();
            AppWrapper.find('.Event .show-details-btn').at(0).simulate('click');
        });
        then('the details are collapsed', () => {
            expect(AppWrapper.find('.Event .event-details')).toHaveLength(0);
        });
    });
})