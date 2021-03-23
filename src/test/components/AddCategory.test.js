import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas con <AddCategory />', ()=>{

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    } );

    test('debe mostrar <AddCategory /> correctamente', () => {  

        expect( wrapper ).toMatchSnapshot();
    
    });

    test('debe de cambiat la caja de texto', () => {  

        const input = wrapper.find('input');
        const value = "Hola mundo";
        input.simulate(
            'change',
            { 
                target: { value }
            }
        );
    
    });

    test('No debe de postear la informacion con Submit', () => {  

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {  

        const input = wrapper.find('input');
        const value = "Test";

        input.simulate( 'change', { target: { value } } );
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect(input.prop('value')).toBe('');

    });

});