import React, { useEffect} from 'react';
import { View, ScrollView,} from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function Favorites(){
    /*
    const [favorites, setFavorites] = useState([]);
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
          if(response){
              const favoritedTeachers = JSON.parse(response);              
              setFavorites(favoritedTeachers);
          }      
        });
    useEffect(() => {
        loadFavorites();
    }
    )
    }*/

    return (
        <View style={styles.container}>
            <PageHeader title= "Meus Proffys favoritos"/>

            <ScrollView style= {styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}
            >
                
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </ScrollView>
        </View>
    )
}
export default Favorites;