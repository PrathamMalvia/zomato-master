import React from 'react'
import { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

// Components
import PhotosCollection from '../../Components/restaurant/PhotosCollection';

const Photos = () => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/6/19663246/bba4d7d396f7f072325ee0accaf0245e.jpg",
        "https://b.zmtcdn.com/data/pictures/6/19663246/44d23754d54d9a90105e198a32bfbb5f.jpeg",
        "https://b.zmtcdn.com/data/pictures/chains/6/19663246/224b88948408695f4d5bf4605568219c.jpeg"
    ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={photos}
                    currentIndex={currentImg}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeViewer}
                />
            )}

            <div className='flex flex-wrap gap-2'>
                {
                    photos.map((photo) => (
                        <PhotosCollection image={photo} openViewer={openViewer} />
                    ))
                }
            </div>
        </>
    )
}

export default Photos;