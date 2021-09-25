import React, {useEffect} from 'react';

import {View,Text} from 'react-native';

import styles from './Header.style';

const Header = ({remaining}) => {

    return(
    <View style={styles.container}>
        <View style={styles.left_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        </View>

        <View style={styles.right_container}>
        <Text style={styles.remaining}>{remaining}</Text>
        </View>

    </View>
);
};


export default Header;