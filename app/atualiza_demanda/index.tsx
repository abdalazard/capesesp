import { Link, useGlobalSearchParams } from 'expo-router';
import { Text, ScrollView, View, TouchableOpacity, TextInput, Switch } from 'react-native';
import { ArrowLeft, Check, Trash } from 'phosphor-react-native';
import useDemandaStore from '@/hooks/store/demanda.store';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../style';

export default function index() {
  const { cod } = useGlobalSearchParams();
  const [demandaEditavel, setDemandaEditavel] = useState<any>(null); // Novo estado para os dados editáveis

  const { buscaDemanda, /*salvarDemanda, atualizarDemanda*/ } = useDemandaStore();

  useEffect(() => {
    const fetchDemanda = async () => {
      if (cod) {
        const demandaRecebida = await buscaDemanda(String(cod));
        setDemandaEditavel({ ...demandaRecebida });

      }
    };
    fetchDemanda();
  }, [cod]);

  console.log(demandaEditavel);


  const handleInputChange = (field: string, value: string) => {
    setDemandaEditavel((prevDemanda: any) => {
        const updatedDemanda = {...prevDemanda};
        if (typeof updatedDemanda[0][field] === 'object' && updatedDemanda[0][field] !== null) {
            updatedDemanda[0][field] = {...updatedDemanda[0][field], descricao: value};
        } else {
            updatedDemanda[0][field] = value;
        }
        console.log(updatedDemanda);
        return updatedDemanda;
    });
  };

  const handleSubmit = async () => {
    // if (cod) {
    //   // Atualizar demanda existente
    //   await atualizarDemanda(String(cod), demanda);
    // } else {
    //   // Criar nova demanda
    //   await salvarDemanda(demanda);
    // }
    // Redirecionar ou exibir mensagem de sucesso

    alert(demandaEditavel)
  };

  const BackButton = () => {
    return (
      <Link href="../(home)" style={{ display: 'flex', alignItems: 'center' }}>
        <ArrowLeft size={32} color="white" />
      </Link>
    );
  };

  const ActionButtons = () => {
    return (
      <View style={{
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}>
        <TouchableOpacity style={{
          backgroundColor: 'blue',
          padding: 8,
          marginHorizontal: 5,
          borderRadius: 5,
          width: 80,
          alignItems: 'center'
        }} onPress={handleSubmit}>
          <Check size={24} color="white" />
        </TouchableOpacity>
        {cod && (
          <TouchableOpacity style={{
            backgroundColor: 'red',
            padding: 8,
            marginHorizontal: 5,
            borderRadius: 5,
            width: 80,
            alignItems: 'center'
          }} onPress={() => alert("Excluir")}>
            <Trash size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
        backgroundColor: 'black',
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}>
        <BackButton />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 25 }}> Editar Demanda</Text>
        </View>
      </View>

      <View style={[styles.listView, {marginTop: 10}]}>

        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
          {demandaEditavel && demandaEditavel[0] ? (
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Código:</Text>
                <Text style={{ fontSize: 20, padding: 5, width: 100 }}>{demandaEditavel[0].codigo}</Text>
              </View>

              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
                <View style={{ flexDirection: 'column', gap: 20, marginBottom: 30 }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Descrição:</Text>
                  <TextInput
                    style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1, borderRadius: 20 }}
                    value={demandaEditavel[0].descricao}
                    onChangeText={text => handleInputChange('descricao', text)}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
                <View style={{ flexDirection: 'column', gap: 20, marginBottom: 30 }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Descrição Web:</Text>
                  <TextInput
                    style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1, borderRadius: 20 }}
                    value={demandaEditavel[0].descricaoweb}
                    onChangeText={text => handleInputChange('descricaoweb', text)}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Prazo:</Text>
                <TextInput
                  style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, width: 100, borderRadius:20 }}
                  value={demandaEditavel[0].prazo}
                  onChangeText={text => handleInputChange('prazo', text)}
                />
              </View>

              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
                <View style={{ flexDirection: 'column', gap: 20, marginBottom: 30 }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Área:</Text>
                  <TextInput
                    style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1, borderRadius: 20 }}
                    value={demandaEditavel[0].area.descricao}
                    onChangeText={text => handleInputChange('area', text)}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
                <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30, alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Atendimento:</Text>
                  <TextInput
                    style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1, borderRadius: 20 }}
                    value={demandaEditavel[0].atendimento.descricao}
                    onChangeText={text => handleInputChange('atendimento', text)}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
                  <View style={{ flexDirection: 'column', gap: 20, marginBottom: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Grupo:</Text>
                    <TextInput
                      style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 20, flex: 1 }}
                      value={demandaEditavel[0].grupo.descricao}
                      onChangeText={text => handleInputChange('grupo', text)}
                    />
                  </View>

                  <View style={{ flexDirection: 'column', gap: 20, marginBottom: 30}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Tipo:</Text>
                    <TextInput
                      style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 20, flex: 1 }} 
                      value={demandaEditavel[0].tipo.descricao}
                      onChangeText={text => handleInputChange('tipo', text)}
                    />
                  </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Status:</Text>
                <Switch
                  value={demandaEditavel[0].ativo.descricao === 'Ativo'} 
                  onValueChange={newValue => {
                    const novoValorAtivo = newValue? 'Ativo': 'Inativo';
                    handleInputChange('ativo', novoValorAtivo); 
                  }}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={demandaEditavel[0].ativo.descricao === 'Ativo'? "#f5dd4b": "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e" 
                />
              </View>
            </View>
          ) : (
            <Text style={{textAlign:'center'}}>Carregando detalhes da demanda...</Text>
          )
        }
        </ScrollView>
      </View>
      <ActionButtons />
    </SafeAreaView>
  );
}