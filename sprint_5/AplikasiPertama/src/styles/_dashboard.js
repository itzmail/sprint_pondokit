import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    welcome: {
        flexDirection: 'row'
    },
    header: {
        flexDirection: 'row'
    },
    textWelcome: {
        fontSize: 20,
        fontWeight: '900',
        flexDirection: 'row'
    },
    warning: {
        flexDirection: 'row',
    },
    imageWarn: {
        height: 20,
        width: 20,
    },
    imagePeople: {
        height: 50,
        width: 50,
        marginLeft: 50
    },
    // popUpBox
    popContainer: {
        marginVertical: 50,
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 10,
        paddingBottom: 10,
        backgroundColor: '#459088'
    },
    popTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    popContent: {
        fontSize: 18
    },
    menu: {
        flexDirection: 'row',
        marginBottom: 18,
    }, 
    mainStudy: {
        borderWidth: 1,
        borderRadius: 20,
        width: "48%",
    },
    mainStudyTitle: {
        flexDirection: 'row',
        padding: 13,
    },
    mainStudyText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight: 40
    },
    mainStudyImage: {
        height: 40,
        width: 40,
        position: 'relative',
        paddingRight: 12
    },
    mainStudyKet: {
        fontSize: 13
    },
    mainTextWarn: {
        color: '#f71d1d',
        fontSize: 13,
        paddingBottom: 4,
        paddingLeft: 4,
        fontWeight: 'bold'
    },
    mainGarden: {
        borderWidth: 1,
        borderRadius: 20,
        width: "48%",
    },
    mainGardenTitle: {
        flexDirection: 'row',
        paddingLeft: 12  
    },
    mainGardenText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 12 
    },
    mainGardenImage: {
        height: 40,
        width: 40,
        position: 'relative',
        marginVertical: 12,
        marginLeft: 10 
    },
    mainGardenKet: {
        fontSize: 13
    }
})