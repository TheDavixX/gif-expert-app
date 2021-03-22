import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas con <CounterApp />', ()=>{
    const title = "Esto es un titulo";
    const url = "https://localhost/logo.png";
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);

    test('debe mostrar <GifGridItem /> correctamente', () => {  

        expect( wrapper ).toMatchSnapshot();
    
    });

    test('debe tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        
        expect(p.text().trim()).toBe(title);

    });

    test('debe de tener la imagen igual al url y alt de las props', () => {
        
        const img = wrapper.find('img');

        expect( img.props().src ).toBe( url );
        expect( img.props().alt ).toBe( title );

    });

    test('debe de tener la clase animate__rubberBand', () => {
        
        const img = wrapper.find('div');
        const classes = img.props().className;

        expect( classes.includes('animate__rubberBand') ).toBe( true );

    });
});