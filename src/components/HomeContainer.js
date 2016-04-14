import React, {
  Navigator,
  Component,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight,
  Button
} from 'react-native'
import globalStyles from '../styles/globalStyles'
import Router from '../router'
import HomeButton from './HomeButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    marginBottom: 32,
    borderWidth: 1,
    borderRadius: 2,
    paddingTop: 8,
    paddingBottom: 8
  }
})

class HomeContainer extends Component {
  _navigate(route) {
    this.props.navigator.push(route)
  }

  render() {    
    return (
      <View style={[globalStyles.outerContainer, styles.container]}>
        <HomeButton 
          onPress={ () => this._navigate(Router.getMoviesRoute()) }
          buttonText="Movies"
        />
        <HomeButton 
          onPress={ () => this._navigate(Router.getToiletFreeRoute()) }
          buttonText="Toilet Free"
        />
      </View>
    )
  }
}

export default HomeContainer