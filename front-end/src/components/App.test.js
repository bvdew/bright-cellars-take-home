import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Product from './Product/Product';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render Please Select a Wine if selected wine is -1', () => {
        expect(wrapper.text().includes('Please Select a Wine')).toBe(true);
    });
    it('should render <Product /> if selected wine is not -1', () => {
        wrapper.setState({ selectedWine: 1 });
        expect(wrapper.find(Product)).toHaveLength(1);
    });
});
