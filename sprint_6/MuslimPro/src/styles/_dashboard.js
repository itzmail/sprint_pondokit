import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },

    topTabIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        tintColor: 'white'
    },

    topTabIconSize: {
        width: 25,
        height: 25
    },
    logo: {
        width: 95,
        height: 95,
        alignSelf: 'center',
    },
    date: {
        textAlign: 'center',
        color: 'white',
        fontSize: 17
    },
    timeContainer: {
        margin: 20,
        borderWidth: 0,
        paddingHorizontal: 30,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    timeClock: {
        width: 20,
        height: 20
    },
    timePray: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingVertical: 20
    },
     statusPrayerText: {
        color: 'white',
        textAlign: 'center'
     },
     news: {
        margin: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        borderRadius: 10
     },
     newsText: {
        padding: 15
     },
     newsImage: {
         width: 130,
         height: 183,
         borderRadius: 10
     },
     newsContent: {
         fontWeight: 'bold',
         fontSize: 18
     },
     newsContentTitle: {
        color: '#808DF9', 
        fontWeight: 'bold', 
        marginBottom: 10, 
        fontSize: 15
    },
    newsDate: {
        marginTop: 28,
        fontSize: 15,
        color: '#808DF9',
        fontWeight: 'bold',
    }
})

export default Styles;