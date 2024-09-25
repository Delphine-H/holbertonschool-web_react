// task_3/js/crud.ts

/**
 * Insère une ligne dans la base de données.
 * @param {RowElement} row - La ligne à insérer.
 * @returns {number} - L'ID de la nouvelle ligne.
 */
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

/**
 * Supprime une ligne de la base de données.
 * @param {number} rowId - L'ID de la ligne à supprimer.
 * @returns {void}
 */
export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

/**
 * Met à jour une ligne dans la base de données.
 * @param {number} rowId - L'ID de la ligne à mettre à jour.
 * @param {RowElement} row - La nouvelle ligne.
 * @returns {number} - L'ID de la ligne mise à jour.
 */
export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}