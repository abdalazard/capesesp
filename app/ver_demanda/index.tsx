import { Link, router, useGlobalSearchParams } from 'expo-router';
import styles from '../style';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { ArrowLeft, Trash } from 'phosphor-react-native';
import useDemandaStore from '@/hooks/store/demanda.store';
import { useEffect, useState } from 'react';
import { PencilSimple } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function index() {
  const { cod } = useGlobalSearchParams();
  const [demandaObtida, setDemandaObtida] = useState<any>(null);

  const { demanda, buscaDemanda } = useDemandaStore();

  useEffect(() => {
    const fetchDemanda = async () => {
      const demandaRecebida = await buscaDemanda(String(cod));
      setDemandaObtida(demandaRecebida);
      console.log(demandaRecebida)
    };

    fetchDemanda();
  }, [demanda,cod]);

  const BackButton = () => {
    return (
      <Link href="../(home)" style={{ display: 'flex', alignItems: 'center' }}>
        <ArrowLeft size={32} color="white" />
      </Link>
    );
  };

  const renderDemandaDetails = () => {
    if (!demandaObtida) {
      return <Text style={{textAlign:'center'}}>Carregando detalhes da demanda...</Text>;
    }

    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, }}>
          <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Código</Text>
            <Text style={{ fontSize: 20 }}>{demandaObtida[0].codigo}</Text>
          </View>
          
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
          <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30, alignItems: 'center' }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Descrição:</Text>
              <Text style={{ fontSize: 20 }}>{demandaObtida[0].descricao}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 30 }}>Descrição Web:</Text>
            <Text style={{ fontSize: 20 }}>{demandaObtida[0].descricaoweb}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Prazo:</Text>
            <Text style={{ fontSize: 20 }}>{demandaObtida[0].prazo}</Text>
          </View>
        </View>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40}}>
          <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30, alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Área:</Text>
            <Text style={{ fontSize: 20 }}>{demandaObtida[0].area?.descricao}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Atendimento:</Text>
            <Text style={{ fontSize: 20 }}>{demandaObtida[0].atendimento?.descricao}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', gap:50, marginBottom: 40 }}>
          <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Grupo:</Text>
            <Text style={{ fontSize: 20 }}>{demandaObtida[0].grupo?.descricao}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Tipo:</Text>
            <Text style={{ fontSize: 20 }}>{demandaObtida[0].tipo?.descricao}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40}}>
          <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Ativo:</Text>
            <Text style={{ fontSize: 20 }}>{demandaObtida[0].ativo?.descricao}</Text>
          </View>
        </View>
      </View>
    );
  };

  const ActionButtons = () => {
    return (
      <View style={{ 
        position: 'absolute',
        bottom: 0,
        left: 0, 
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 5,   
      }}>
        <TouchableOpacity
          style={{ 
            backgroundColor:'blue',
            padding: 8,
            marginHorizontal: 5,
            borderRadius: 5,
            width: 80,
            alignItems:'center'  
          }}
          onPress={() => router.push({
            pathname: '../atualiza_demanda',
            params: { cod }
          })
        }>
          <PencilSimple size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ 
          backgroundColor:'red',
          padding: 8,
          marginHorizontal: 5,
          borderRadius: 5,
          width: 80,
          alignItems:'center' 
        }} onPress={() => alert("Excluir")}>
          <Trash size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  };

  return (  
    <SafeAreaView style={styles.container}>
      <View style={[styles.topView, { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }]}>
        <BackButton />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color:'#fff', fontSize: 25 }}> Detalhes da Demanda</Text>
        </View>
      </View>

      <View style={[styles.listView, {marginTop: 10}]}>
        <ScrollView 
          style={styles.scrollView} 
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {renderDemandaDetails()}
          <ActionButtons />
      </ScrollView>
    </View>
  </SafeAreaView>
  )
}