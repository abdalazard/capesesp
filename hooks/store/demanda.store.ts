import { create } from 'zustand';
import DemandaStore, { Demanda, DemandasArray } from './types/demanda.type';

export const useDemandaStore = create<DemandaStore>(
    (set) => ({

    demanda: null,
    demandas: [],
    isLoading: false,
    error: null,
    setIsLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),

    setDemandas: (demandas: DemandasArray[]) => set({ demandas }),

    fetchDemandas: async () => {
        try {
            const url = 'http://127.0.0.1:8000/api';
            const response = await fetch(url + '/demandas');
            const data = await response.json();

            set({ demandas: data[0] });
        } catch (error) {
            set({ error: 'Erro ao carregar as demandas' });
        } finally {
            set({ isLoading: false });
        }
    },

    buscaDemanda: async (codigoBusca) => {
        try {
            const url = 'http://127.0.0.1:8000/api';
            const response = await fetch(`${url}/demanda/${codigoBusca}`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Erro ${response.status}`);
            }

            const data = await response.json(); 

            set({ demandas: data });

            return data; 
        } catch (error) {
            console.error("Erro na busca", error);
            return null; 
        } finally {
            set({ isLoading: false }); 
        }
    },
}));

export default useDemandaStore;