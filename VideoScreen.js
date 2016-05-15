'use strict';

var React = require('react-native');

var {
  Platform,
  StyleSheet
} = React;

var VitamioView = require('./VitamioView');

class VideoScreen extends React.Component {
  render() {
    return (
        <VitamioView style={styles.video} streamUrl="rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov"/>
    );
  }
}

var styles = StyleSheet.create({
  video: {
    flex: 1,
    flexDirection: 'row'
  }
})

module.exports = VideoScreen;