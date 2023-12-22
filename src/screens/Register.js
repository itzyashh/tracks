import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Input, Text } from '@rneui/base'
import Spacer from '../components/Spacer'

const Register = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <Text h3 >Sign Up for Tracker</Text>
      </Spacer>

        <Input label='Email'
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          autoCorrect={false}
         />


        <Input label='Password'
          value={password}
          onChangeText={setPassword}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
         />

      <Spacer>
        <Button title='Sign Up' />
      </Spacer>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 250,

  }
})

export default Register