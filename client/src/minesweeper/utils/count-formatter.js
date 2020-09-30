export const formatCount = count => {
  if (count < 1) return '000';
  if (count < 10) return `00${count}`;
  if (count < 100) return `0${count}`;

  return `${count}`;
};
