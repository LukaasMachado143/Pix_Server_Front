export default function setCurrency(value) {
  // if (!value) return "R$ 00,00";
  const positiveValue = Math.abs(value);
  return positiveValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
