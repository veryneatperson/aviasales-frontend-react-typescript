export default function displayLayoversLabel(amount: number): string {
  if (amount === 0) {
    return 'Без пересадок';
  }

  return `${amount} пересадк${amount === 1 ? 'а' : 'и'}`;
}
