import {StyleSheet} from 'react-native';

const StyleDashboard = StyleSheet.create({
    container: {
        margin: 15
    },
    header: {
        flexDirection: 'row',
        marginBottom: 35
    },
    headerText: {
        fontSize: 25
    },
    headerImage: {
        height: 20,
        width: 20,
        position: 'absolute',
        left: 170,
        top: 10
    },
    popup: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#b60cd4'
    },
    popupLastRead: {
        flexDirection: 'row'
    },
    popupLastReadImage: {
        height: 25,
        width: 25
    },
    popupLastReadText: {
        color:'white',
        marginLeft: 5,
        fontWeight: 'bold',
    },
    popupList: {
        flexDirection: 'row'
    },
    popupSurah: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20
    },
    popupAyat: {
        color: 'white',
        marginTop: 5
    },
    popupImage: {
        height: 120,
        width: 120,
        marginLeft: 110
    },
    menuText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 50,
        marginTop: 40,
        marginBottom: 30,
        color: 'grey'
    },
    list: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    listAyat: {
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 500,
        width: 30
    },
    listSurah: {
        marginLeft: 30
    },
    buttonImage: {
        width: 70, 
        height: 70, 
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#b60cd4'}

});

export default StyleDashboard;