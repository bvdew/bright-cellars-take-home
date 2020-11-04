import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Product from './Product';
import Details from './Details/Details';
import Reviews from './Reviews/Reviews';
import NewReview from './NewReview/NewReview';

configure({ adapter: new Adapter() });

describe('<Product />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Product wineId={1} />);
    });

    it('should render one <Details />', () => {
        expect(wrapper.find(Details)).toHaveLength(1);
    });
    it('should render one <Reviews />', () => {
        expect(wrapper.find(Reviews)).toHaveLength(1);
    });
    it('should render one <NewReview />', () => {
        expect(wrapper.find(NewReview)).toHaveLength(1);
    });
});
