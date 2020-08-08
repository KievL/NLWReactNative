import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


function TeacherItem(){
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style = {styles.avatar} source={{uri: 'data:image/jpeg;base64,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' }}/>
                <View style={styles.profileInfo}>
                    <Text style= {styles.name}>Wesley</Text>
                    <Text style= {styles.subject}>Linguagens</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Especialista em linguagens. Bowie Knife Marble Fade aaaaa aaaa aaaaa aaaaaaaaa aaa
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style= { [styles.favoriteButton, styles.favourited]}>
                        <Image source={heartOutlineIcon}/>
                    </RectButton>
                    <RectButton style= { styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>

            </View>

        </View>
    );
}

export default TeacherItem;