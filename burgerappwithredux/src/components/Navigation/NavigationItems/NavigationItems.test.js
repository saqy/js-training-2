import React from 'react'
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-17';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adpter: new Adapter()});

describe('<NavigationItems />', ()=>{
    it('should render 2 <navigationItem />  elements if not authenitcated');
    const wrapper = shallow(<NavigationItems />)
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
});

