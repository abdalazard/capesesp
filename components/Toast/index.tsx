import { Text, Animated } from 'react-native';

export default function Toast({message, visible}: any) {
    const opacity = new Animated.Value(0); 
  
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  
    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: 5,
          left: 20,
          right: 20,
          padding: 15,
          backgroundColor: 'green', 
          borderRadius: 10,
          opacity,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>
          {message}
        </Text>
      </Animated.View>
    );
  };