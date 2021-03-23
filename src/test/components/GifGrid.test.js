import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas con <GifGrid />', ()=>{

    const cagetory = "One Punch Man";

    test('debe mostrar <GifGrid /> correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={ cagetory } />);;
        expect( wrapper ).toMatchSnapshot();
    
    });

    test('debe mostrar item cuando se cargan imagenes useFetchGifs', () => {  

        const gifs =[{
            id: 'ABC',
            url: 'htyps://studiandopapu.com',
            title: 'titulo we',
        },
        {
            id: '123',
            url: 'htyps://studiandopapu.com',
            title: 'titulo we',
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ cagetory } />);;
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });

});