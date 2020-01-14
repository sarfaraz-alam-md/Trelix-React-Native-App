import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChatBot } from 'aws-amplify-react';

class App extends Component {
 handleComplete(err, confirmation) {
    if (err) {
      alert('Bot conversation failed')
      return;
    }
    alert('Success: ' + JSON.stringify(confirmation, null, 2));
    return 'Thank you! What would you like to do next?';
  }
  
  render() {
    return (
      <div className="App">
       <ChatBot
         title="Trelix ChatBot"
         botName="QnABotWorkshop_BotFe"
         welcomeMessage="Welcome, how can I help you today?"
         onComplete={this.handleComplete.bind(this)}
         clearOnComplete={true}
        />
      </div>
    );
  }
}

const styles = {
  bubbleStyles: {
    text: {
      fontSize: 16,
    },
    chatbubble: {
      borderRadius: 30,
      padding: 10
    }
  },
  headerTitle: {
    color: 'white',
    fontSize: 22
  },
  header: {
    backgroundColor: 'rgb(0, 132, 255)',
    padding: 20,
    borderTop: '12px solid rgb(204, 204, 204)'
  },
  messagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center'
  },
  input: {
    fontSize: 16,
    padding: 10,
    outline: 'none',
    width: 350,
    border: 'none',
    borderBottom: '2px solid rgb(0, 132, 255)'
  }
}
  
  

export default App;
