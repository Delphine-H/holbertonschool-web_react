// task_3/js/interface.ts

// Définir le type RowID
export type RowID = number;

// Définir l'interface RowElement
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}