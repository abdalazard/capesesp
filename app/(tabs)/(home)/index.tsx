import { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Animated, 
  RefreshControl 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../style';
import useDemandaStore from '@/hooks/store/demanda.store';

export default function index() {
  const { demandas, fetchDemandas } = useDemandaStore();

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const animations = useRef<Animated.Value[]>([]);

  useEffect(() => {
      fetchDemandas();
  },);

  useEffect(() => {
    if (demandas.length > 0) {
      animations.current = demandas.map(() => new Animated.Value(0));

      Animated.stagger(
        100,
        demandas.map((_, i) => 
          Animated.timing(animations.current[i], {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          })
        )
      ).start();
    }
  }, [demandas]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      fetchDemandas(); 
      setIsRefreshing(false); 
    }, 2000);
  };

  const handleAddDemand = async () => {
    // Lógica para adicionar demanda
  };

  const handleDeleteDemand = async (id: string) => {
    // Lógica para deletar demanda
  };

  const handleEditDemand = async (id: string) => {
    // Lógica para editar demanda
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.topView}>CRUD - Básico</Text>
      </View>

      <View style={styles.listView}>
        <Text style={styles.title}>Lista de Demandas:</Text>
        <ScrollView 
          style={styles.scrollView} 
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            <RefreshControl 
              refreshing={isRefreshing}
              onRefresh={handleRefresh} 
              progressViewOffset={20}
            />
          }
        >
          {Array.isArray(demandas) && demandas.length > 0 ? (
            demandas.map((demanda, index) => {
              return (
                <View key={demanda.codigo} style={styles.listaDeObjetos}>
                  <Text style={styles.text}>{demanda.descricao}</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => handleEditDemand(demanda.codigo)}>
                      <Icon name="edit" size={20} color="#4CAF50" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleDeleteDemand(demanda.codigo)}>
                      <Icon name="trash-2" size={20} color="#F44336" />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })
          ) : (
            <Text style={{textAlign: 'center'}}>Carregando demandas...</Text>
          )}
        </ScrollView>
      </View>      

      <View style={styles.criacaoDeObjeto}>
        <Text style={styles.title}>Criar demanda:</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddDemand}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
