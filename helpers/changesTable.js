import { getDate } from './date.js';

export function createChangesTable(data) {
  const table = document.createElement('table');
  table.classList.add('table');
  table.classList.add('table-changes');
  const headerCell = document.createElement('th');
  const row = document.createElement('tr');
  const cell = document.createElement('td');

  data.forEach((item) => {
    const itemCopy = JSON.parse(JSON.stringify(item));
    const dataRow = row.cloneNode();
    if (itemCopy[0] === '__updatedAt') {
      itemCopy[1] = getDate(itemCopy[1]);
      itemCopy[2] = getDate(itemCopy[2]);
    }
    const cells = itemCopy.map((cell) => {
      return `<td class='table-changes__cell'>${cell}</td>`;
    });
    dataRow.innerHTML = cells.join('');

    table.append(dataRow);
  });

  return table;
}
