export type Notes = string[];

export type Note = string;

export enum color {
  default = 0,
  yellow = 1,
  blue = 2,
  pink = 3,
}

export type NoteObject = {
  _id: string;
  content: string;
  creationDate: string;
  creationTime: string;
};
