import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AppBar from './AppBar';
import MenuItem from '@material-ui/core/MenuItem';

configure({ adapter: new Adapter() });

describe('<AppBar />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AppBar />);
    });

    it('should render one <MenuItem /> if wines is empty', () => {
        expect(wrapper.find(MenuItem)).toHaveLength(1);
    });
    it('should render three <MenuItem /> if 2 wines are set', () => {
        const wines = [
            {
                id: 1,
                name: 'Mojave Rain Merlot 2017',
            },
            {
                id: 2,
                name: 'Mojave Rain Merlot 2017',
            },
        ];
        wrapper.setProps({ wines });
        expect(wrapper.find(MenuItem)).toHaveLength(3);
    });
});
