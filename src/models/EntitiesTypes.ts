export enum Months {
  JANEIRO = 1,
  FEVEREIRO,
  MARCO,
  ABRIL,
  MAIO,
  JUNHO,
  JULHO,
  AGOSTO,
  SETEMBRO,
  OUTUBRO,
  NOVEMBRO,
  DEZEMBRO,
}

export type iUserInfo = {
  uid: string;
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
};

export type iDevedor = {
  id: string;
  nome: string;
  sigla: string;
};

export type iGasto = {
  id: string;
  idParcela: string;
  userId: string;
  year: number;
  createdAt: number;
  devedorId: number;
  total: number;
  parcela: number;
  totalParcelas: number;
  valorParcela: number;
  descricao: string;
  month: Months;
};

export type iCard = {
  id: string;
  nome: string;
  cor: string;
};
