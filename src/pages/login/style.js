import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A0A1F',
    },
    logoContainer: {
        alignItems: 'center',
        position: 'relative',
        bottom: 80,
    },
    logo: {
        width: 100,
        height: 100,
    },
    formContainer: {
        width: '80%',
    },
    input: {
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#ffff',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        position: 'relative',
        bottom: 50,
        marginBottom: 50,
        color: 'white',
    },
    errorMessage: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 70,
    },
    passwordForget: {
        position: 'relative',
        bottom: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgetPassword: {
        color: '#ffff',
    },
    button: {
        marginTop: 30,
        width: 180,
        height: 45,
        borderRadius: 100,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholder: {
        position: 'relative',
        bottom: 30,
        left: 5,
        color: '#ffff',
    },
});

export default styles;