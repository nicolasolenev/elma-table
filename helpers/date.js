export function getDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  let month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month;

  const year = date.getFullYear() % 1000;

  let hours = date.getHours();
  hours = hours < 10 ? '0' + hours : hours;

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}
