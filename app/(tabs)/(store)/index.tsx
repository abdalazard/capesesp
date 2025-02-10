import { 
  View, 
  Text, 
} from 'react-native';
import styles from '../../style';

export default function create() { 

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.topView}>Cria demanda</Text>
      </View>
    </View>
  );
}
