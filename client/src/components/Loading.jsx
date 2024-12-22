import './Loading.css'
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = ({isLoading}) => {

    const iconStyle = {
        width: 150,
        height: 100,
        alignItems: 'center'
    }
    
    if (isLoading) {
        return (
            <div className='loading-page'>
                <DotLottieReact src="https://lottie.host/0e4adda4-abce-44d0-8389-d0d9323436f2/7ryAgclWH4.lottie" loop autoplay
                style={iconStyle}
                />
            </div>
        )
    }
   
}

export default Loading