export default function setCurrency(value) {
  if (!value) return "-";
  const positiveValue = Math.abs(value);
  return positiveValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
