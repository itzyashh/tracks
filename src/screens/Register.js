import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Input, Text } from '@rneui/base'
import Spacer from '../components/Spacer'
import { useDispatch, useSelector } from 'react-redux'
import { updateFirstName, updateIsLogged, updateLastName } from '../redux/UserReducer/reducer'
import tracker from '../api/tracker'
import validation from '../utils/validation'
import { showError } from '../utils/helper'

const Register = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const user = useSelector(state => state.user)

  const isValidate = () => {
    const error = validation({ email, password })
    if (error) {
      showError(error)
      return false
    }
    return true
  }

  const onPress = async () => {

   const checkValidation = isValidate()
    if (!checkValidation) {
      return
    }

    try {
    const response = await tracker.post('/signup', { email, password })
    console.log(response.data)
    } catch (error) {
      console.log(error)
      showError(error?.response?.data)
    }
  }
  

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
        <Button
          onPress={onPress}
         title='Sign Up' />
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