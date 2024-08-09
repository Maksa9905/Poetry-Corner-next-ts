export const dateConverter = (datestring: string) => {
  const now = new Date();
  
  // "2012-04-23T18:25:43.511Z"
  const time = new Date(datestring) 

  const year =
    time.getFullYear() === now.getFullYear() ? '' : `.${time.getFullYear()}`;
  const date = time.toLocaleString().slice(0, 5);
  const fullDate = date + year;

  const hours =
    time.getHours().toString().length === 1
      ? '0' + time.getHours()
      : time.getHours();
  const minutes =
    time.getMinutes().toString().length === 1
      ? '0' + time.getMinutes()
      : time.getMinutes();
  const fullTime = `${hours}:${minutes}`;

  if (fullDate === now.toLocaleString().slice(0, 5)) {
    return `Сегодня в ${fullTime}`;
  } else {
    return `${fullDate} в ${fullTime}`;
  }
};
