import { getDate } from './helpers/date.js';
import { createChangesTable } from './helpers/changesTable.js';

const table = document.getElementById('table');

$(function () {
  $.getJSON('./response.json', function (data) {
    if (!data.success) {
      alert('Ошибка данных');
      return;
    }
    try {
      data.result.forEach((item) => {
        const row = document.createElement('tr');
        row.classList.add('table__row');
        const cell = document.createElement('td');
        cell.classList.add('table__cell');

        const companyName = cell.cloneNode();
        companyName.classList.add('table__cell_company');
        companyName.innerText = item.item_name;
        row.append(companyName);

        const description = cell.cloneNode();
        description.innerText = item.description;
        description.classList.add('table__cell_description');
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
        employee.classList.add('table__cell_employee');
        employee.innerText = item.created_by_name;
        row.append(employee);

        table.append(row);
      });
    } catch (e) {
      alert('Некорректные данные для таблицы');
    }
  }).fail(function (jqXHR, textStatus, errorThrown) {
    alert('Не удалось загрузить/прочитать данные (' + textStatus + ')');
  });
});
