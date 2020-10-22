import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/GetGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs))
    // }, [category])

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate_animated animate__fadeIn"> {category}</h3>
            {loading && <p className="animate_animated animate__Flash">Loading</p>}

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
