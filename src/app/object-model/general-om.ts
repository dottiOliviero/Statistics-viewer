export class Utenti {
  user: string;
  password: string;
}

export class ListaFile {
  name: string;
  lastModifiedDate: string;
  size: string;
  isSelected: boolean = false;
  fileItem: any;
}

export class Method {
  name: string;
  value: number;
}
