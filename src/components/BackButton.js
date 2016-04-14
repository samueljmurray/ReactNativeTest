import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'
import globalStyles from '../styles/globalStyles'

class BackButton extends Component {  
  render () {
    return (
      <TouchableHighlight
        style={globalStyles.buttonContainer}
        onPress={ () => this.props.navigator.pop() }
      >
        <Text style={[globalStyles.baseText, globalStyles.button]}>Back</Text>
      </TouchableHighlight>
    )
  }
}

export default BackButton