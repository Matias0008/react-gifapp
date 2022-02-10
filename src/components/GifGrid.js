import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import React from 'react';


export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );

    const documentTitle = document.querySelector('.title');

    console.log(loading)
    if (loading == false) {
        documentTitle.classList.add('padding-top')
    }

    return (
        <>
            <h3 className='subtitle animate__fadeIn'>{ category }</h3>
            { loading && <p>Loading</p> }

            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem
                        key={ img.id }
                        { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
};