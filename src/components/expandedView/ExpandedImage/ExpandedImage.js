

import React from 'react';

import {motion, useAnimation} from 'framer-motion';
import { getRawImage, selectExpandedLoading, throwError, toggleImageLoading } from '../ExpandedViewFeature';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingExpanded } from '../ExpandedLoading/LoadingExpanded';

export const ExpandedImage = ({ image }) => {

    
    const [errorCount, incrementError] = React.useState(0)

    const dispatch = useDispatch();

    const loading = useSelector(selectExpandedLoading);

    const imageAnimation = useAnimation();
    
    const handleImageLoadingError = async () => {

        let count = errorCount + 1;

        if (errorCount === 0) {

            getRawImage(image.full_image).then(res => {
                document.getElementById('expanded-image').src = "data:image/jpeg;base64," + res
            })    
            
        } else if (errorCount === 1) {

            const png = image.full_image.split('.jpg')[0] + '.png';

            getRawImage(png).then(res => {
                document.getElementById('expanded-image').src = "data:image/png;base64," + res
            })

        } else if (errorCount === 2) {

            document.getElementById('expanded-image').src = image.label_image;

        } else {

            dispatch(throwError("Error Fetching Image At This Time."))

        }

        incrementError(count)
      
    }

    const handleImageOnLoad = () => {
        dispatch(toggleImageLoading(false))

        setTimeout(() => {
            imageAnimation.start({
                opacity: 1,
                display: 'block'
            })
        }, 10)
    }

    return (
        <>
            {loading ? 
            <LoadingExpanded />
            : null}
            <motion.img 
            onError={handleImageLoadingError} 
            onLoad={handleImageOnLoad}
            width={image.width} height={image.height} id="expanded-image"  
            animate={imageAnimation} initial={{opacity: 0, display: 'none'}} 
            src={image.full_image} alt="full-content" 
            />
            
        </>
    )
}


