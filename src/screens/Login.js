import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Input ,Text} from '@rneui/base'
import { useDispatch, useSelector } from 'react-redux'
import Spacer from '../components/Spacer'
import { showError } from '../utils/helper'
import tracker from '../api/tracker'
import { updateAuth, updateEmail } from '../redux/UserReducer/reducer'

const Login = ({navigation}) => {
  const dispatch = useDispatch()
  const prevEmail = useSelector(state => state.user.email)

  const [email, setEmail] = React.useState(prevEmail)
  const [password, setPassword] = React.useState('')


  const isValidate = () => {
    
    if (email === '' || password === '') {
      showError('Please fill all the fields')
      return false
    }
    return true
  }

  const saveToken = (token,email) => {
    dispatch(updateAuth({auth:token}))
    dispatch(updateEmail({email}))
  }


  const goToRegister = () => {
    navigation.navigate('Register')
  }


  const onPress = async () => {
    const checkValidation = isValidate()
    if (!checkValidation) {
      return
    }
    try {
      const response = await tracker.post('/signin', { email, password })
      const { token } = response.data
      saveToken(token,email)
    }
    catch (error) {
      console.log(error)
      showError(error?.response?.data?.error)
    }

  }


  return (
      <SafeAreaView style={styles.container}>
     
        <Spacer>
          <Text h3 >Login</Text>
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
            style={{width:200}}
            onPress={onPress}
           title='Login' />
        </Spacer>

      <Spacer>
      <Text>Don't have an account? </Text>
      <Text onPress={goToRegister} style={{color:'blue'}}>Sign Up</Text>
      </Spacer>

      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  }
})
export default Login