export default function setDate(date) {
  const dateObj = new Date(date);
  const formatedDate = dateObj.toLocaleDateString();
  return formatedDate;
}
