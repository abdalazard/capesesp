export type Demanda = {
    codigo: string;
    descricao: string;
    descricaoweb: string;
    tipo: {
        codigo: string;
        descricao: string;
    };
    grupo: {
        codigo: string;
        descricao: string;
    };
    area: {
        codigo: string;
        descricao: string;
    };
    ativo: {
        codigo: string;
        descricao: string;
    };
    atendimento: {
        codigo: string;
        descricao: string;
    };
    prazo: number;
};

export type DemandasArray = {
    codigo: string;
    descricao: string;
    descricaoweb: string;
    prazo: number;
};

interface DemandaStore {
    demandas: DemandasArray[];
    demanda: Demanda | null;
    setDemandas: (demandas: Demanda[]) => void; 
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    error: string | null;
    setError: (error: string | null) => void;
    fetchDemandas: () => Promise<void>;
    buscaDemanda: (codigoBusca: string) => Promise<Demanda  | null>;
    atualizarDemanda: (codigoBusca: string, demanda: any) => Promise<Demanda  | null>;
}

export default DemandaStore;