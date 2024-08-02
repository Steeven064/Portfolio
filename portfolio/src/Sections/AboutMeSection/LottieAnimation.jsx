import Lottie from 'react-lottie';
import animationData from '../../../public/images/astronauta.json';
import animationDataForm from '../../../public/images/sendmail.json';

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

export function LottieAnimation2() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataForm,
    };

    return (
        <Lottie options={defaultOptions} height={400} width={400} />
    );
}