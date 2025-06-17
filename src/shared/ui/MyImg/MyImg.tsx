import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const  MyImage =  ( { image } )  =>  ( 
    <>
    < LazyLoadImage 
      alt = { image.alt } 
      src = { image.src }  
      width = { image.width }  
      onError={e=> e.currentTarget.src = '/public/image_not_found.png'}
      effect='blur'
      /> 
    </>
) 

export default MyImage