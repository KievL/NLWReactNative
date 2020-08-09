import React, { ReactNode } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

/*
export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}
*/
interface TeacherItemProps {
    favorited: boolean;
}


/*const*/ function TeacherItem/*: React.FC<TeacherItemProps> = ({teacher, favorited}) =>*/ () {
  /*  function handleLinkToWhatsapp(){
        Linking.canOpenURL('whatsapp://send?phone=${teacher.whatsapp}')
    }
    cont [isFavorited, setFavorited] = useState(favorited);

    function handleToggleFavorite(){
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray = [];

            if(favorites){
                favoritesArray = JSON.parse(favorites);
            }

        if(isFavorited){
            const favoritesIndex = favoritesArray.findIndex(teacherItem: Teacher) =>{
                return teacherItem.id === teacher.id;
            
            });
            favoritesArray.splice(favoriteIndex, 1);
            setFavorite(false);
        }else{                        
            favoritesArray.push(teacher);
            setFavorite(true);
            
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }
*/
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style = {styles.avatar} source={{uri: /*teacher.avatar*/ 'https://pbs.twimg.com/profile_images/1272719191594938371/Ho48wn3m.jpg'}}/>
                <View style={styles.profileInfo}>
                    <Text style= {styles.name}>{/*teacher.name*/} Wesley</Text>
                    <Text style= {styles.subject}>{/*teacher.subject*/}Linguagens</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {/*teacher.bio*/}Barueri-SP
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ {/*teacher.cost*/}777,99</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style= { [styles.favoriteButton,/* isFavorited ? */styles.favourited/* : []*/]}>
                        {/* isFavorited
                        ? <Image source={unfavoriteIcon}/>
                        : */<Image source={heartOutlineIcon}/>
                    }
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