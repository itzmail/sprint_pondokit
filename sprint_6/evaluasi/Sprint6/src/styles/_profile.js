import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    profile: {
        flexDirection: 'row'
    },
    photoProfile: {
        borderRadius: 50,
        height: 100,
        width: 100
    },
    menuProfile: {
        marginLeft: 20
    },
    nameProfile: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    job: {
        opacity: 0.5,
        marginBottom: 20
    },
    followButton: {
        backgroundColor: '#427cf7',
        padding: 5,
        textAlign: 'center',
        borderRadius: 20,
        paddingHorizontal : 15,
        color: 'white'
    },
    sendMessageButton: {
        width: 15,
        height: 15,
        alignItems: 'center',
        backgroundColor: '#59d2f7',
        tintColor: 'white',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginLeft: 10
    },
    status: {flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginBottom: 40},
    statusNumb: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    gambar: {
        width: 150,
        height: 150,
        margin: 5
    }

})

export default Styles;