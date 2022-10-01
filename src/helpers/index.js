const DAYOFWEEK = {
  sun: "Sunday",
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
};

export const formatToDollar = (currency) => {
  return currency.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const getDayOfWeek = (term) => {
  return DAYOFWEEK[term];
};

export const isCurrentDay = (dayName = "Wednesday") => {
  const today = new Date().getDay();
  const daysOfWeek = Object.values(DAYOFWEEK);
  return daysOfWeek[today] === dayName;
};
