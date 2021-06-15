export const dateFromNow = (time) => {
  const nowDate = new Date();
  let difference = Math.abs(nowDate - time);

  let months = Math.round(difference / (1000 * 3600 * 24 * 30));
  return months;
};
