import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    title: {
    fontWeight: 'bold',
    margin: 30
    },
    subTitle: {
      fontSize: 45,
      fontWeight: 'bold'
    },
    newMember: {
      flexDirection: 'row',
      margin: 15
    },
    titleForm: {
      fontSize: 30,
    },
    inputForm: {
      height: 50, 
      width: '100%',
      borderBottomWidth: 2,
      borderRadius: 15,
      marginVertical: 10
    },
    img: {
      marginVertical: 20,
      marginHorizontal: '10%',
    },
    reset: {
      flexDirection: 'row',
      margin: 15
    },
    login: {
      backgroundColor: 'blue',
      height: 50,
      width: '80%',
      marginLeft: 45,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    }
  })