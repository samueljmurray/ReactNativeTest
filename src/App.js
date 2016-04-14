import React, {
  Component,
  View,
  StatusBar
} from 'react-native'
import ExNavigator from "@exponent/react-native-navigator";
import Router from './router'
import globalStyles from './styles/globalStyles'

class App extends Component {
  render() {
    return (
      <View style={globalStyles.outerContainer}>
        <StatusBar
          hidden={true}
        />
        <ExNavigator
          showNavigationBar={false}
          initialRoute={Router.getHomeRoute()}
          renderScene={ this.renderScene }
        />
      </View>
    )
  }
}

export default App