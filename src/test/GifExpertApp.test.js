import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GiftExpertApp';

describe('Pruebas con <GifExpertApp />', ()=>{


    test('debe mostrar <GifExpertApp /> correctamente', () => {
        const categories = [ 'One Punch', 'Dragon Ball' ];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });


});