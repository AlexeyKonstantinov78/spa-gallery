
export const formDate = (date) => {
  const formater = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'short',
    timeStyle: 'short',
  });
  const fecha = new Date(date);
  const formateddate = formater.format(fecha);
  return formateddate;
};
