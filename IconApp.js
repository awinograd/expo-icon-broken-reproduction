import React from 'react';
import { AppLoading } from 'expo';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class IconExample extends React.Component {
  state = { loading: true };

  componentDidMount() {
    console.log('componentDidMount JS');
    this.setState({ loading: false });
  }

  render() {
    return this.state.loading ? (
      <AppLoading
        onFinish={console.log.bind(this, 'onFinish')}
        onError={console.error}
      />
    ) : (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          width: '100%',
        }}
      >
        <Ionicons name="md-checkmark-circle" size={32} color="blue" />
      </View>
    );
  }
}
