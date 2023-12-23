import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'

const Login = ({navigation}) => {

  const goToRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      <Button title={'Go to Register'} onPress={goToRegister} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 250,
  }
})
export default Login