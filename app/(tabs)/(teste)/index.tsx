import { 
  View, 
  Text, 
} from 'react-native';
import styles from '../../style';

export default function teste() { 

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.topView}>Teste</Text>
      </View>
    </View>
  );
}
