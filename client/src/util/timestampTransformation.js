const timestampToTime = (timestamp) => {
  const date = new Date(timestamp);
  let hour = date.getHours();
  let isPM = false;
  if (hour > 12) {
    hour = hour - 12;
    isPM = true;
  }
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${hour}:${minutes}:${seconds} ${isPM ? 'p.m.' : 'a.m.'}`;
};

const timestampToDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toDateString();
};

export { timestampToTime, timestampToDate };
