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

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'

const styles = StyleSheet.create({
  movieContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  rightContainer: {
    flex: 1
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: '700',
  },
  year: {
    textAlign: 'center',
  },
})

class MoviesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: new ListView.DataSource({
        rowHasChanged: (row1, row2) => { row1 !== row2 }
      }),
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
          movies: this.state.movies.cloneWithRows(responseData.movies),
          loaded: true
        })
      })
      .done()
  }
  render() {    
    return (
      <View style={globalStyles.outerContainer}>
        <BackButton navigator={this.props.navigator} />
        
        { this.state.loaded &&
          <ListView
            dataSource={this.state.movies}
            renderRow={this.renderMovie}
            style={styles.listView}
          />
        }
        { !this.state.loaded && this.renderLoadingView() }
      </View>
    )
  }

  renderMovie(movie) {
    return (
      <View style={styles.movieContainer}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={[globalStyles.baseText, styles.title]}>{ movie.title }</Text>
          <Text style={[globalStyles.baseText, styles.year]}>{ movie.year }</Text>
        </View>
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.baseText}>Loading movies...</Text>
      </View>
    )
  }
}

export default MoviesContainer