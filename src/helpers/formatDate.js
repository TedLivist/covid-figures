const formatDate = () => {
  const date = new Date();
  const toLocale = date.toLocaleDateString();
  const newArr = toLocale.split('/');
  const nextDate = [];
  [nextDate[0], nextDate[1]] = [newArr[2], newArr[0]];
  if (date.getHours() < 14) {
    // fetch information for previous date
    nextDate[2] = newArr[1] - 1;
  } else {
    // fetch information for current date
    nextDate[2] = [newArr[1]];
  }
  const latestDate = nextDate.join('-');

  return latestDate;
};

export default formatDate;
