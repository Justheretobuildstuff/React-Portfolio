import React from 'react';
import { Image } from 'react-native';

function Background() {
    return(
        <Image 
    source={require('../assets/images/desert.jpg')}  
    style={{width: 400, height: 400}} 
        />
    )
}

export default Background