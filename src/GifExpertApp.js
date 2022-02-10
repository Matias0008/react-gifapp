import React, {useState} from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    const hayCategoria = categories.length === 0 ? true : false;

    const handleReset = () => {
        const documentTitle = document.querySelector('.title');

        setCategories([]);
        documentTitle.classList.remove('padding-top')
    }

    let palabra = 'Limpiar busqueda';
    if (categories.length > 1) palabra = `Limpiar busquedas (${categories.length})`;

    const buttonClean = document.querySelector('.buttonLimpiar');
    if (buttonClean) {
        if ( categories.length === 0 ) {
            buttonClean.classList.add('disabled');
        } else {
            buttonClean.classList.remove('disabled');
        }
    }
    return (
        <>
        <h2 className='title'>Buscador de Gifs</h2>
        <AddCategory setCategories={ setCategories }/>
        <button onClick={ handleReset } className='buttonLimpiar disabled'>{ palabra }</button>
        <hr />

        <ol>
            {/* <div className='div-nocategories'>
            { hayCategoria && <h2 className='nocategories'>No hay ninguna busqueda.</h2> }
            </div> */}
            {
                categories.map( category => 
                   <GifGrid 
                   key = { category }
                   category = { category } 
                   /> 
                )
                }
        </ol>

        </>
    )
}

export default GifExpertApp;