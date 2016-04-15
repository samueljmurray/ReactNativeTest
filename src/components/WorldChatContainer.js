import React, {
  Component,
  StyleSheet,
  ListView,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput
} from 'react-native'
import { Socket } from '../utils/phoenixChannels'
import BackButton from './BackButton'
import globalStyles from '../styles/globalStyles'

const SOCKET_ADDR = 'http://192.168.228.179:4000/chat'

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch',
  },
  chatInput: {
    height: 40,
    borderColor: '#4a4a4a',
    borderWidth: 1
  },
  chatMessage: {
    textAlign: 'left',
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#4a4a4a'
  },
  messagesContainer: {
    flex: 1,
    alignItems: 'stretch',
  }
})

class WorldChatContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      joined: false,
      messagesList: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      messageIDs: [],
      messages: [],
      joinError: null,
      textInputValue: ''
    }
  }

  componentDidMount() {
    this.connectChatSocket()
  }

  connectChatSocket() {
    let socket = new Socket(SOCKET_ADDR, {params: {token: window.userToken}})
    socket.connect()
    this.channel = socket.channel("rooms:world", {})
    this.channel.join()
      .receive("ok", resp => { 
        this.setState({...this.state, joined: true})
      })
      .receive("error", resp => {
        this.setState({...this.state, joinError: "ERROR"}) // change to display actual error
      })

    this.channel.on('new_msg', payload => {
      const msgTimestamp = new Date()
      this.setState({messages: [...this.state.messages, `${msgTimestamp.getTime()}: ${payload.body}`]})
      this.setState({messagesList: this.state.messagesList.cloneWithRows(this.state.messages)})
    })

    setTimeout(() => {
      if (!this.state.joined && !this.state.joinError) {
        this.setState({...this.state, joinError: "Taking a while to join..."})
      }
    }, 5000)
  }

  _handleKeyPress(e) {
    const key = e.nativeEvent.key
    if (key === 'Enter') {
      this.channel.push("new_msg", {body: this.state.textInputValue})
      console.log(this.state.textInputValue)
      this.setState({...this.state, textInputValue: ''})
    }
  }

  render() {    
    return (
      <View style={globalStyles.outerContainer}>
        <BackButton navigator={this.props.navigator} />
        { !this.state.joined && !this.state.joinError && this.renderLoadingView() }
        { !this.state.joined && this.state.joinError && this.renderErrorView() }
        { this.state.joined && this.renderWorldChatView() }
      </View>
    )
  }

  renderLoadingView() {
    return (
      <View style={globalStyles.container}>
        <Text>Connecting to the world...</Text>
      </View>
    )
  }

  renderErrorView() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.errorText}>{this.state.joinError}</Text>
      </View>
    )
  }

  renderMessage(message) {
    return <Text style={styles.chatMessage}>{message}</Text>
  }

  renderWorldChatView() {
    return (
      <View style={[globalStyles.container, styles.chatContainer]}>
        <ListView
          dataSource={this.state.messagesList}
          renderRow={message => this.renderMessage(message)}
        />
        <TextInput
          style={styles.chatInput}
          onChangeText={(textInputValue) => { this.setState({textInputValue: textInputValue}) }}
          onKeyPress={this._handleKeyPress.bind(this)}
          value={this.state.textInputValue}
        />
      </View>
    )
  }
}

export default WorldChatContainer