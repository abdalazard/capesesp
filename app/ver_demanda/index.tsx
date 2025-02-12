import { Link, useGlobalSearchParams } from 'expo-router';
import styles from '../style';
import { Text, ScrollView, View } from 'react-native';

export default function index() {
  const { cod } = useGlobalSearchParams();

  return (  
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Link href="../(home)">
          <Text style={{ color: 'white' }}>←</Text>
        </Link>
        <Text style={styles.topView}>Detalhes da Demanda</Text>
      </View>

      <View style={styles.listView}>
        <ScrollView 
          style={styles.scrollView} 
          contentContainerStyle={{ flexGrow: 1 }}
        >
          a
      </ScrollView>
    </View>
  </View>
  )
}