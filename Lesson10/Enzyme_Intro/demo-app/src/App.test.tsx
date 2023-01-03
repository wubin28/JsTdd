import React from 'react';
import { render } from 'enzyme';
import App from './App'

describe('Our test suite', () => {

    it('renders the App component', () => {
        const wrapper = render(<App/>);
        expect(wrapper.find('.App')).toBeDefined();
    });
});