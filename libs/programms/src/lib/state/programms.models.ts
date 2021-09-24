export interface ProgrammEntity {
  name: string;
  id: number | string;
  showTime: string;
}

export interface Programms {
  programms: ProgrammEntity[];
}
