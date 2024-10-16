import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font';
import React from 'react'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [loaded, error] = useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });


  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Login")
  }
  const handleSinup = () => {
    navigation.navigate("Signup")
}
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Image source={require("../assets/man.png")} style={styles.bannerImage} />
      <Text style={styles.title}>Lorem ipsum dolor</Text>
      <Text style={styles.subTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores sapiente a, doloremque necessitatibus labore</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleLogin}>
          <Text style={styles.loginButtontext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButtonWrapper, { backgroundColor: colors.white }]} onPress={handleSinup}>
          <Text style={styles.signupButtonText}>Sign-Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center"
  }
  ,
  logo: {
    height: 40,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  }
  ,
  bannerImage: {
    height: 250,
    width: 231
  }
  ,
  title: {
    fontSize: 40,
    fontFamily: fonts.Regular,
    color: colors.primary,
    marginTop: 40
  }
  ,
  subTitle: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.secondary,
    fontFamily: fonts.Medium,
    marginVertical: 20
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    width: "90%",
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: 'center',
    width: "50%",
    backgroundColor: colors.primary,
    borderRadius: 98,

  },
  loginButtontext: {
    color: colors.white,
    fontSize: 15,
    fontFamily: 'Poppins-Bold'
  }
  ,
  signupButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
  }

})