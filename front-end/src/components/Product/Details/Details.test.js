import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Details from './Details';

configure({ adapter: new Adapter() });

describe('<Details />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Details wineId={1} />);
    });

    it('should render a wine title', () => {
        expect(wrapper.find('.Title')).toHaveLength(1);
    });
    it('should render a wine subtitle', () => {
        expect(wrapper.find('.Subtitle')).toHaveLength(1);
    });
    it('should render wine tags', () => {
        expect(wrapper.find('.Tags')).toHaveLength(1);
    });
});
