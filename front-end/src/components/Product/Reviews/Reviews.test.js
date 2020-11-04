import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Reviews from './Reviews';

configure({ adapter: new Adapter() });

describe('<Reviews />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Reviews wineId={1} />);
    });

    it('should render an average rating', () => {
        expect(wrapper.find('.AverageRating')).toHaveLength(1);
        expect(wrapper.find('.AverageRating').text().includes('Average Rating')).toBe(
            true
        );
    });
    it('should render ul element to list reviews', () => {
        expect(wrapper.find('.ReviewList')).toHaveLength(1);
    });
});
