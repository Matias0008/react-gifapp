import React, {useState} from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    const hayCategoria = categories.length === 0 ? true : false;

    const handleReset = () => {
        setCategories([]);
    }

    return (
        <>
        <h2 className='title'>Gif App</h2>
        <AddCategory setCategories={ setCategories }/>
        <button onClick={ handleReset } className='buttonLimpiar'>Limpiar busqueda/s</button>
        <hr />

        <ol>
            { hayCategoria && <h2 className='nocategories'>Aca se mostraran sus busquedas...</h2> }
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