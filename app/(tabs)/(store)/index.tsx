import { Link, useGlobalSearchParams } from 'expo-router';
import { Text, ScrollView, View, TouchableOpacity, TextInput } from 'react-native';
import { ArrowLeft, Check, Trash } from 'phosphor-react-native';
import useDemandaStore from '@/hooks/store/demanda.store';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Demanda } from '@/hooks/store/types/demanda.type';

export default function CriarDemanda() {
  const { cod } = useGlobalSearchParams();
  const [demanda, setDemanda] = useState<any>(null);

  const { buscaDemanda, /*salvarDemanda, atualizarDemanda*/ } = useDemandaStore();

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
    setDemanda((prevDemanda: any) => ({
      ...prevDemanda,
      [field]: value,
    }));
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
        justifyContent: 'flex-start'
      }}>
        <BackButton />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 25 }}> {!demanda ? "Editar" : "Criar"} Demanda</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        {!demanda? (
          <Text style={{ textAlign: 'center' }}>Carregando os dados da demanda...</Text>
        ): (
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Código</Text>
              <TextInput
                style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, width: 100, borderRadius:20, backgroundColor: '#fff' }}
                value={demanda.cod}
                onChangeText={text => handleInputChange('cod', text)}
              />
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
              <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30, alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Descrição:</Text>
                <TextInput
                  style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1, borderRadius: 20, backgroundColor: '#fff' }}
                  value={demanda.descricao}
                  onChangeText={text => handleInputChange('descricao', text)}
                />
              </View>
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
              <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30, alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Descrição Web:</Text>
                <TextInput
                  style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1, borderRadius: 20, backgroundColor: '#fff' }}
                  value={demanda.descricaoWeb}
                  onChangeText={text => handleInputChange('descricaoWeb', text)}
                />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Prazo</Text>
              <TextInput
                style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, width: 100, borderRadius:20, backgroundColor: '#fff' }}
                value={demanda.prazo}
                onChangeText={text => handleInputChange('prazo', text)}
              />
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
              <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30, alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Área:</Text>
                <TextInput
                  style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1, borderRadius: 20, backgroundColor: '#fff' }}
                  value={demanda.area}
                  onChangeText={text => handleInputChange('area', text)}
                />
              </View>
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
              <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30, alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Atendimento:</Text>
                <TextInput
                  style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1, borderRadius: 20, backgroundColor: '#fff' }}
                  value={demanda.atendimento}
                  onChangeText={text => handleInputChange('atendimento', text)}
                />
              </View>
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 40 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Grupo</Text>
                <TextInput
                  style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, width: 100, borderRadius: 20, backgroundColor: '#fff' }}
                  value={demanda.grupo}
                  onChangeText={text => handleInputChange('grupo', text)}
                />

                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Tipo</Text>
                <TextInput
                  style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, width: 100, borderRadius: 20, backgroundColor: '#fff' }}
                  value={demanda.tipo}
                  onChangeText={text => handleInputChange('tipo', text)}
                />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Ativo</Text>
              <TextInput
                style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', padding: 5, width: 100, borderRadius:20 }}
                value={demanda.ativo}
                onChangeText={text => handleInputChange('ativo', text)}
              />
            </View>
          </View>
        )}
      </ScrollView>
      <ActionButtons />
    </SafeAreaView>
  );
}