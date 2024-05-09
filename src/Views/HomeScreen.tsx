import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AvatarComponent } from '../component'
const HomeScreen = () => {
  return (
    <View style={{marginTop: '5%'}}>
      <Text>HomeScreen</Text>
      <AvatarComponent size={100} round url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqkhLfIC0bHybwlkf75qx80dsK1MENM7gmevMGAGtWw&s' >
      </AvatarComponent>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})