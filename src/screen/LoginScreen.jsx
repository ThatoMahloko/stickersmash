import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import { useFonts } from 'expo-font';
import React, { useState } from 'react'
import { Ionicons } from 'react-native-vector-icons'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [loaded, error] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    });

    const [secureEntry, setSecureEntry] = useState(true);

    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack()
    }
    const handleSignup = () => {
        navigation.navigate("Signup")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleBack}>
                <Ionicons name={"arrow-back-outline"} color={colors.primary} size={30} />
            </TouchableOpacity>
            <View style={styles.texttContainer}>
                <Text style={styles.headingText}>Hey,</Text>
                <Text style={styles.headingText}>Welcome</Text>
                <Text style={styles.headingText}>Back</Text>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Ionicons name={"mail-outline"} size={30} color={colors.secondary} />
                    <TextInput style={styles.TextInput} placeholder='Enter your email' keyboardType='email-address'></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name={"lock-closed-outline"} size={30} color={colors.secondary} />
                    <TextInput style={styles.TextInput} placeholder='Enter your password' secureTextEntry={secureEntry} keyboardType='default'></TextInput>
                    <TouchableOpacity onPress={() => {
                        setSecureEntry((prev) => !prev)
                    }}>
                        <Ionicons name={"eye-outline"} size={25} color={colors.secondary} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButtonWrapper}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.continueText}>or continue with</Text>
                <TouchableOpacity style={styles.googleButtonContainer}>
                    {/* <Image source={require("../assets/google.png")} style={styles.googleImage} /> */}
                    <Ionicons name={"logo-google"} size={25} />
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.accountText}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={handleSignup}>
                        <Text style={styles.signUptext}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 30
    }
    ,
    backButtonWrapper: {
        height: 40,
        width: 40,
        backgroundColor: colors.gray,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // padding:20
    },
    texttContainer: {
    }
    ,
    headingText: {
        fontSize: 32,
        fontFamily: 'Poppins-Medium',
        color: colors.primary
    }
    ,
    formContainer: {
        marginTop: 30,
    }
    ,
    inputContainer: {
        borderWidth: 1,
        borderBlockColor: colors.primary,
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 20
    }
    ,
    TextInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: 'Poppins-Light'
    }
    ,
    forgotPasswordText: {
        textAlign: "right",
        color: colors.primary,
        fontFamily: 'Poppins-SemiBold'

    }
    ,
    loginButtonWrapper: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        marginTop: 20

    },
    loginText: {
        color: colors.white,
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
        padding: 15
    }
    ,
    continueText: {
        textAlign: 'center',
        marginVertical: '20',
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: colors.primary,
    }
    ,
    googleButtonContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    }
    ,
    googleImage: {
        height: 18,
        width: 18,

    }
    ,
    googleText: {
        color: colors.primary,
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
        padding: 10
    }
    ,
    footerContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 20,
        gap: 5
    }
    ,
    accountText: {
        color: colors.primary,
        fontFamily: fonts.Regular,

    },
    signUptext: {
        fontFamily: fonts.SemiBold,

    }
})