export default function getCarrierLogoUrl(
  baseUrl: string,
  carrier: string
): string {
  return `${baseUrl}${carrier}.png`;
}
