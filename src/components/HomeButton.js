import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'

import globalStyles from '../styles/globalStyles'

const styles = StyleSheet.create({
  homeButtonContainer: {
    marginBottom: 32,
  },
  homeButton: {
    fontWeight: '700'
  }
})

class HomeButton extends Component {
  render () {
    return (
      <TouchableHighlight
        style={[globalStyles.buttonContainer, styles.homeButtonContainer]}
        onPress={ this.props.onPress }
      >
        <Text style={[globalStyles.baseText, globalStyles.button, styles.homeButton]}>{this.props.buttonText}</Text>
      </TouchableHighlight>
    )
  }
}

export default HomeButton