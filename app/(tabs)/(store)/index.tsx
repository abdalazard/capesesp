import { Link, useGlobalSearchParams } from 'expo-router';
import { Text, ScrollView, View, TouchableOpacity, TextInput, Switch } from 'react-native';
import { ArrowLeft, Check } from 'phosphor-react-native';
import useDemandaStore from '@/hooks/store/demanda.store';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '@/app/style';
import Toast from '@/components/Toast';

export default function CriarDemanda() {
  const { cod } = useGlobalSearchParams();
  const [demanda, setDemanda] = useState<any>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const { /*salvarDemanda*/ } = useDemandaStore();

  useEffect(() => {
    const fetchDemanda = async () => {
        setDemanda({
          area: '',
          atendimento: '',
          ativo: '',
          codigo: '',
          descricao: '',
          descricaoweb: '',
          grupo: '',
          prazo: '',
          tipo: '',
        });
    };
    fetchDemanda();
  }, [cod]);

  const handleInputChange = (field: string, value: string) => {
    setDemanda((prevDemanda: any) => {
        const updatedDemanda = {...prevDemanda};
        if (typeof updatedDemanda[field] === 'object' && updatedDemanda[field] !== null) {
            updatedDemanda[field] = updatedDemanda[field];
        } else {
            updatedDemanda[field] = value;
        }
        return updatedDemanda;
    });
  };

  const handleSubmit = async () => {
    try {
      const data = {
        "codigo": demanda.codigo,
        "descricao": demanda.descricao,
        "descriweb": demanda.descricaoweb,
        "tipo": demanda.tipo.codigo,
        "grupo": demanda.grupo.codigo,
        "area": demanda.area.codigo,
        "ativo": demanda.ativo.codigo,
        "atendimento": demanda.atendimento.codigo,
        "prazo": demanda.prazo,
      };

      console.log(data)
      // await criarDemanda(data);
      
      setToastMessage('Demanda atualizada com sucesso!');
  
      setShowToast(true);
    
    } catch (error) {
      console.error(error);
      setToastMessage('Erro ao atualizar demanda!');
    }

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  }

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
        bottom: 0,
        left: 0,
        right: 10,
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
        justifyContent: 'flex-start',
      }}>
        <BackButton />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 25 }}>Criar Demanda</Text>
        </View>
      </View>

      <View style={[styles.listView, {marginTop: 10}]}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
          {!demanda? (
            <Text style={{ textAlign: 'center' }}>Carregando os dados da demanda...</Text>
          ): (
            <View>
              <Toast message={toastMessage} visible={showToast}/>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Código</Text>
                <TextInput
                  style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, width: 100, borderRadius:20, backgroundColor: '#fff' }}
                  onChangeText={text => handleInputChange('cod', text)}
                />
              </View>

              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
                <View style={{ flexDirection: 'column', gap: 20, marginBottom: 30,}}>
                  <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Descrição:</Text>
                  <TextInput
                    style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1, borderRadius: 20, backgroundColor: '#fff' }}
                    onChangeText={text => handleInputChange('descricao', text)}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
                <View style={{ flexDirection: 'column', gap: 20, marginBottom: 30, }}>
                  <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Descrição Web:</Text>
                  <TextInput
                    style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1, borderRadius: 20, backgroundColor: '#fff' }}
                    onChangeText={text => handleInputChange('descricaoWeb', text)}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Prazo</Text>
                <TextInput
                  style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, width: 100, borderRadius:20, backgroundColor: '#fff' }}
                  onChangeText={text => handleInputChange('prazo', text)}
                />
              </View>

              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
                <View style={{ flexDirection: 'column', gap: 20, marginBottom: 30 }}>
                  <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Área:</Text>ScrollView, View, TouchableOpacity, TextInput, Switch, 
                  <TextInput
                    style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1, borderRadius: 20, backgroundColor: '#fff' }}
                    onChangeText={text => handleInputChange('area', text)}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
                <View style={{ flexDirection: 'column', gap: 20, marginBottom: 30 }}>
                  <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Atendimento:</Text>
                  <TextInput
                    style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1, borderRadius: 20, backgroundColor: '#fff' }}
                    onChangeText={text => handleInputChange('atendimento', text)}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
                <View style={{ flexDirection: 'column', marginBottom: 10, justifyContent: 'space-between', gap: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Grupo</Text>
                    <TextInput
                      style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, width: 100, borderRadius: 20, backgroundColor: '#fff' }}
                      onChangeText={text => handleInputChange('grupo', text)}
                    />
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Tipo</Text>
                    <TextInput
                      style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, width: 100, borderRadius: 20, backgroundColor: '#fff' }}
                      onChangeText={text => handleInputChange('tipo', text)}
                    />
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Status:</Text>
                <Switch
                  onValueChange={newValue => {
                    const novoValorAtivo = newValue? 'Ativo': 'Inativo';
                    handleInputChange('ativo', novoValorAtivo); 
                  }}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={demanda.ativo === 'Ativo'? "#f5dd4b": "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e" 
                />
              </View>
            </View>
          )}
        </ScrollView>
      </View>
      <ActionButtons />
    </SafeAreaView>
  );
}