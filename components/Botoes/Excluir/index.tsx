import { Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import deletarDemanda from '@/hooks/store/demanda.store';

interface ExcluirProps {
  cod: string;
}

export default function Excluir({ cod }: ExcluirProps) {
  const handlePress = async () => {
    try {
        console.log(cod)
    //   await deletarDemanda(cod);
    } catch (error) {
      console.error("Erro ao deletar demanda:", error);
    }
  };

  return (
    <TouchableOpacity 
      style={{
        backgroundColor: 'red',
        padding: 8,
        marginHorizontal: 5,
        borderRadius: 5,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={handlePress}
    >
      <Trash size={24} color="white" />
    </TouchableOpacity>
  );
};
