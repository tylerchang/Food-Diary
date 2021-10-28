import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component'


const ImageGrid = ({ setSelectedImg }) => {

    const { docs } = useFirestore('images');

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div
                    className="img-wrap"
                    key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                    whileHover={{ opacity: 1, cursor: 'pointer' }}
                >

                    {/* <motion.img
                        src={doc.url} alt="Image Expected"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    /> */}
                    <LazyLoadImage
                        alt="Image Expected"
                        //height={image.height}
                        src={doc.url} // use normal <img> attributes as props
                    //width={image.width} 
                    />

                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;