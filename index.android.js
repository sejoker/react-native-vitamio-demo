'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  BackAndroid,
  Navigator,
  ToolbarAndroid,
  View,
} = React;

var VideoScreen = require('./VideoScreen');
var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

var RouteMapper = function(route, navigationOperations, onComponentRef) {
  _navigator = navigationOperations;
    return (
      <View style={{flex: 1}}>
        <ToolbarAndroid
              actions={[]}
              navIcon={require('image!arrow_left')}
              onIconClicked={navigationOperations.pop}
              style={styles.toolbar}
              titleColor="white"
              title="Video example" />
        <VideoScreen
          style={{flex: 1}}
          navigator={navigationOperations}
        />
      </View>
    );
};

var vitamioDemo = React.createClass({
  render: function() {
    var initialRoute = {name: 'video'};
    return (
      <Navigator
            style={styles.container}
            initialRoute={initialRoute}
            configureScene={() => Navigator.SceneConfigs.FadeAndroid}
            renderScene={RouteMapper}
          />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    backgroundColor: '#FFFFFF',
    height: 56,
  }
});

AppRegistry.registerComponent('vitamioDemo', () => vitamioDemo);
