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
            const response = await fetch('http://127.0.0.1:8000/api/demandas');
            const data = await response.json();

            console.log(data)

            set({ demandas: data });
        } catch (error) {
            set({ error: 'Erro ao carregar as demandas' });
        } finally {
            set({ isLoading: false });
        }
    },
}));

export default useDemandaStore;