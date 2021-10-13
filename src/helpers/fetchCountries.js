export const fetchCountries = async (date) => {
  const response = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}`);
  return response.json();
};

const cont = [
  'Spain',
  'Italy',
  'Germany',
  'United Kingdom',
  'France',
  'Netherlands',
  'Belgium',
  'Portugal',
  'Brazil',
  'Canada',
  'Chile',
  'China',
  'India',
  'Mexico',
  'US',
  'Colombia',
  'Australia',
  'Argentina',
  'Denmark',
];

export const resolveCountries = (response, date) => {
  const countryKeys = response.dates[date].countries;

  const obj = Object.entries(countryKeys);
  const mainArr = [];
  let num = 0;

  obj.map(([country, value]) => {
    for (let i = 0; i <= cont.length; i += 1) {
      if (cont[i] === country) {
        const { id } = value;
        const confirmedCases = value.today_confirmed;
        num += value.today_confirmed;
        mainArr.push({ id, country, confirmedCases });
      }
    }
    return mainArr;
  });

  return { mainArr, num };
};
