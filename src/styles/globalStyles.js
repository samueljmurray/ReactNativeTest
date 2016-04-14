import React, { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
  baseText: {
    color: '#4a4a4a'
  },
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 2,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20
  },
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 2,
    paddingTop: 8,
    paddingBottom: 8,
    borderStyle: 'solid',
    borderColor: '#4a4a4a',
  }
})

export default globalStyles