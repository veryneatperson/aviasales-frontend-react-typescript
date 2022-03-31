function displayStartTime(ISOdate: string): string {
  const date = new Date(ISOdate);
  const strHours = date.getUTCHours().toString();
  const strMinutes = date.getUTCMinutes().toString();

  return `${strHours.padStart(2, '0')}:${strMinutes.padStart(2, '0')}`;
}

function displayEndTime(ISOdate: string, duration: number): string {
  const startTime = new Date(ISOdate).getTime();
  const endTime = new Date(startTime + duration * 60 * 1000);
  const strHours = endTime.getUTCHours().toString();
  const strMinutes = endTime.getUTCMinutes().toString();

  return `${strHours.padStart(2, '0')}:${strMinutes.padStart(2, '0')}`;
}

export default function displayTime(
  ISOstartDate: string,
  duration: number
): string {
  const start = displayStartTime(ISOstartDate);
  const end = displayEndTime(ISOstartDate, duration);

  return `${start} - ${end}`;
}
