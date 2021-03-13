import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    navTitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    photoprofil: {
        width: 40,
        height: 40
    },
    topTab: {
        backgroundColor: '#708232',
        fontSize: 18,
        fontWeight: '400',
        padding: 10,
        justifyContent: 'space-between',
        borderRadius: 15,
        marginHorizontal: 5
    },
    option: {
        backgroundColor: 'grey',
        marginVertical: 10,
        padding: 20,
        paddingHorizontal: 25,
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        borderRadius: 10,
        opacity: 0.7,
        fontWeight: 'bold'

    }
})

export default Styles;