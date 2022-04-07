import { React } from 'react';
import { StyleSheet, Platform, View } from 'react-native';

import Color from '../constants/Color';
import TitleText from '../components/TitleText';

const Header=props =>{
    return(
        <View style={styles.header}>
            <TitleText>{props.title}</TitleText>
        </View>
    )
}


const styles = StyleSheet.create({
  header:{
      width:'100%',
      height:90,
      padding:36,
      backgroundColor: Color.primary ,
      alignItems:'center',
      justifyContent:'center'
  },
  headerTitle:{
      color:'black',
      fontSize: 18,
      fontFamily:'open-sans-bold'
  }
});
export default Header;