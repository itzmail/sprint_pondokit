import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1689b4'
    },
    greeting: {
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 25
    },
    textInput: {
        fontSize: 18,
        color: 'white'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        height: 20,
        color: 'black',
        marginBottom: 20,
        fontSize: 10
    },
    buttonSignIn: {
        borderWidth: 0,
        backgroundColor: 'yellow',
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 30,
        height: 50,
        paddingVertical: 5,
        marginVertical: 10,
        color: 'white'
    },
    buttonSignUp: {
        borderWidth: 1,
        borderColor: 'yellow',
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 30,
        height: 50,
        paddingVertical: 5,
        marginVertical: 10,
        color: 'white'
    }
})

export default Styles;