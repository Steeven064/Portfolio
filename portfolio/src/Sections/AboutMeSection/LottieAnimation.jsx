import Lottie from 'react-lottie';
import animationData from '../../../public/images/astronauta.json';

export function LottieAnimation(){
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
      };
    return(
        <Lottie options={defaultOptions} height={400} width={400} />
    );
}