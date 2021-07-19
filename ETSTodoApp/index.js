/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

const ETSTodoApp = () => <App />;

AppRegistry.registerComponent('ETSTodoApp', () => ETSTodoApp);

// AppRegistry.registerComponent(appName, () => App);
