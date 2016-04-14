import React, {
  Component,
  StyleSheet,
  ListView,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native'
import BackButton from './BackButton'
import globalStyles from '../styles/globalStyles'

const REQUEST_URL = 'http://isthetoiletfree.com/api'

const styles = StyleSheet.create({
  toiletFree: {
    flex: 1,
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Georgia'
  },
})

class ToiletFreeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          toiletFree: responseData.has_free_toilet,
          loaded: true
        })
      })
      .done()
  }
  render() {    
    return (
      <View style={globalStyles.outerContainer}>
        <BackButton navigator={this.props.navigator} />
        { !this.state.loaded && this.renderLoadingView() }
        { this.state.loaded && this.renderToiletFreeView() }
      </View>
    )
  }

  renderLoadingView() {
    return (
      <View style={globalStyles.container}>
        <Text>Checking if toilet is free...</Text>
      </View>
    )
  }

  renderToiletFreeView() {
    return (
      <View style={globalStyles.container}>
        <Text style={[globalStyles.baseText, styles.toiletFree]}>
          {this.state.toiletFree === true && 'YES'}
          {this.state.toiletFree === false && 'NO'}
        </Text>
      </View>
    )
  }
}

export default ToiletFreeContainer