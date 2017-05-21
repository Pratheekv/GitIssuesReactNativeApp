/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ListView,
  Alert,
  ScrollView
} from 'react-native';

import api from './api';

export default class MyNewApp extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      repo: '',
      gitIssues:[],
    };
  }



  getIssues = () => {
    
    Alert.alert('Repository: ' + this.state.repo );

    api.getIssues(this.state.repo).then((res) => {
    
        this.setState({
          gitIssues: res,
          repo:''
        })
    })
    
  };


  render(){
    
    return (
 
      <View>      

        <Text style={styles.welcome}>
          Welcome to Github Issues
        </Text>      

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1,margin: 10}}
          onChangeText={(repo) => this.setState({repo})}
          value={this.state.repo}
        />

        <Button              
        style={{height: 40, borderColor: 'gray', borderWidth: 1,margin: 10}}              
          onPress={this.getIssues }
          title="Get Issues"
          color="#841584"
          accessibilityLabel="Get Issues"
        />

        <ScrollView>
            {
              this.state.gitIssues.map((y) => {
                  return (
                    <Text style={styles.Issues}>
                      {y.title}
                    </Text>
                  );
              })
            }
        </ScrollView>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  Issues: {
    fontSize: 15,
    textAlign: 'left',
    margin: 10,
  },

});

AppRegistry.registerComponent('MyNewApp', () => MyNewApp);
