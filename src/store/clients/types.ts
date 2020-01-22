export interface Client {
  id: string;
  givenName: string;
  logo: string;
  tags: string[];
  [propName: string]: any;
}

export interface ClientsState {
  clients: Client[];
}
