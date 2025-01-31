export const formatPhoneNumber = (phone: string) => {
  if (!phone) return '';

  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length !== 10) return phone;

  return `+7 ${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 10)}`;
};

export const getDayPrefix = (days: number): string => {
  if (days % 10 === 1 && days % 100 !== 11) {
    return `${days} рабочий день`;
  } else if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100)) {
    return `${days} рабочих дня`;
  } else {
    return `${days} рабочих дней`;
  }
};
