import { getDate } from './helpers/date.js';
import { createChangesTable } from './helpers/changesTable.js';

const table = document.getElementById('table');

$(function () {
  $.getJSON('./response.json', function (data) {
    if (!data.success) {
      alert('data loading error');
    }

    data.result.forEach((item) => {
      const row = document.createElement('tr');
      row.classList.add('table__row');
      const cell = document.createElement('td');
      cell.classList.add('table__cell');

      const companyName = cell.cloneNode();
      companyName.innerText = item.item_name;
      row.append(companyName);

      const description = cell.cloneNode();
      description.innerText = item.description;
      row.append(description);

      const changes = cell.cloneNode();
      changes.classList.add('table__cell_changes');
      changes.append(createChangesTable(item.changes));
      row.append(changes);

      const createdAt = cell.cloneNode();
      createdAt.classList.add('table__cell_date');
      createdAt.innerText = getDate(item.created_at);
      row.append(createdAt);

      const employee = cell.cloneNode();
      employee.innerText = item.created_by_name;
      row.append(employee);

      table.append(row);
    });
  });
});
