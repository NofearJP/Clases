import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //setCategories(['HusterxHunter', ...categories]);
    //     // setCategories([...categories, 'HusterxHunter']);

    //     setCategories(cats => [...cats, 'HunterxHunter'])
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    // categories.map(cate => {
                    //     return <li key={cate}>{cate}</li>
                    // })

                    categories.map(cate => (
                        <GifGrid
                            key={cate}
                            category={cate}
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;