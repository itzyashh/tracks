import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spacer = ({children}) => {
  return (
    <View style={{margin: 15}}>
      <Text>{children}</Text>
    </View>
  )
}

export default Spacer

const styles = StyleSheet.create({})