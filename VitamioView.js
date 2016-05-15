var { requireNativeComponent, PropTypes, View } = require('react-native');

var iface = {
  name: 'VideoView',
  propTypes: {
    ...View.propTypes,
    streamUrl: PropTypes.string
  }
};

module.exports = requireNativeComponent('RCTVitamioView', iface);



