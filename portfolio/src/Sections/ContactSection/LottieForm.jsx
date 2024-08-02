import Lottie from 'react-lottie';
import animationDataForm from '../../../public/images/sendmail.json';

export function LottieForm() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataForm,
    };

    return (
        <Lottie options={defaultOptions} height={300} width={300} />
    );
}