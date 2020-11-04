import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NewReview from './NewReview';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

configure({ adapter: new Adapter() });

describe('<NewReview />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NewReview wineId={1} updateReviews={() => {}} />);
    });

    it('should render one <Slider />', () => {
        expect(wrapper.find(Slider)).toHaveLength(1);
    });

    it('should render one <TextField />', () => {
        expect(wrapper.find(TextField)).toHaveLength(1);
    });
});
