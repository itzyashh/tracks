import { View, Text } from 'react-native'
import React from 'react'
import { logoutUser } from '../redux/UserReducer/reducer'
import { useDispatch } from 'react-redux'
import { Button } from '@rneui/base'

const TrackList = () => {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(logoutUser())
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TrackList</Text>
      <Button onPress={logout} title='Logout' />
    </View>
  )
}

export default TrackList