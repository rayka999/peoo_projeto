// Tipo de Quarto
class TipoQuarto {
  tipo: string;
  preco: number;
  capacidade: number;

  constructor(tipo: string, preco: number, capacidade: number) {
    this.tipo = tipo;
    this.preco = preco;
    this.capacidade = capacidade;
  }
}

// Quarto
class Quarto {
  tipo: TipoQuarto;
  numero_quarto: number;
  status: 'Disponível' | 'Ocupado' | 'Reservado';
  id_quarto: number;
  id_hotel: number;
  nota_quarto_media: number;

  constructor(
    tipo: TipoQuarto,
    numero_quarto: number,
    status: 'Disponível' | 'Ocupado' | 'Reservado',
    id_quarto: number,
    id_hotel: number,
    nota_quarto_media: number
  ) {
    this.tipo = tipo;
    this.numero_quarto = numero_quarto;
    this.status = status;
    this.id_quarto = id_quarto;
    this.id_hotel = id_hotel;
    this.nota_quarto_media = nota_quarto_media;
  }
}

// Hóspede
class Hospede {
  nome: string;
  email: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefone: string;
  nota_hotel_media: number;
  id_hotel: number;

  constructor(
    nome: string,
    email: string,
    endereco: string,
    cidade: string,
    estado: string,
    telefone: string,
    nota_hotel_media: number,
    id_hotel: number
  ) {
    this.nome = nome;
    this.email = email;
    this.endereco = endereco;
    this.cidade = cidade;
    this.estado = estado;
    this.telefone = telefone;
    this.nota_hotel_media = nota_hotel_media;
    this.id_hotel = id_hotel;
  }
}

// Cliente
class Cliente {
  nome: string;
  CPF: number;
  email: string;
  telefone: string;
  endereco: string;
  data_nascimento: Date;

  constructor(
    nome: string,
    CPF: number,
    email: string,
    telefone: string,
    endereco: string,
    data_nascimento: Date
  ) {
    this.nome = nome;
    this.CPF = CPF;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
    this.data_nascimento = data_nascimento;
  }
}

// Feedback
class Feedback {
  nota_hotel: number;
  observacoes: string;

  constructor(nota_hotel: number, observacoes: string) {
    this.nota_hotel = nota_hotel;
    this.observacoes = observacoes;
  }
}

// Pagamento
class Pagamento {
  metodo_pagamento: string;
  valor: number;
  status: 'Pago' | 'Pendente' | 'Cancelado';
  data_pagamento: Date;

  constructor(
    metodo_pagamento: string,
    valor: number,
    status: 'Pago' | 'Pendente' | 'Cancelado',
    data_pagamento: Date
  ) {
    this.metodo_pagamento = metodo_pagamento;
    this.valor = valor;
    this.status = status;
    this.data_pagamento = data_pagamento;
  }
}

// Reserva
class Reserva {
  hospedeQuarto: Hospede[];
  clientes_id: number;
  dataEntrada: Date;
  responsavel: Hospede;
  quarto: Quarto[];
  Pagamento: Pagamento[];
  checkin: Date;
  checkout: Date;

  constructor(
    hospedeQuarto: Hospede[],
    clientes_id: number,
    dataEntrada: Date,
    responsavel: Hospede,
    quarto: Quarto[],
    Pagamento: Pagamento[],
    checkin: Date,
    checkout: Date
  ) {
    this.hospedeQuarto = hospedeQuarto;
    this.clientes_id = clientes_id;
    this.dataEntrada = dataEntrada;
    this.responsavel = responsavel;
    this.quarto = quarto;
    this.Pagamento = Pagamento;
    this.checkin = checkin;
    this.checkout = checkout;
  }
}

// Nova Reserva
class NovaReserva {
  cliente_id: number;
  numero_quartos: number;
  quarto_novo: number;
  id_quarto: number;
  id_hotel: number;

  constructor(
    cliente_id: number,
    numero_quartos: number,
    quarto_novo: number,
    id_quarto: number,
    id_hotel: number
  ) {
    this.cliente_id = cliente_id;
    this.numero_quartos = numero_quartos;
    this.quarto_novo = quarto_novo;
    this.id_quarto = id_quarto;
    this.id_hotel = id_hotel;
  }
}
