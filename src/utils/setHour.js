export default function setHour(date) {
  const dateObj = new Date(date);
  const options = { hour: "numeric", minute: "numeric" };
  const formatedHour = dateObj.toLocaleTimeString(undefined, options);
  return formatedHour;
}
