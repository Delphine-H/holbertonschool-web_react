// task_3/js/main.ts

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Créer un objet row
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insérer une nouvelle ligne et obtenir l'ID de la nouvelle ligne
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Mettre à jour la ligne avec un champ age
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Supprimer la ligne
CRUD.deleteRow(newRowID);