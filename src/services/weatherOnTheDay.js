function transformTime(timeInput) {
  const time = new Date(timeInput * 1000);

  const hours = Math.floor(
    (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ).toString();

  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString();

  return `${hours.length < 2 ? `0${hours}` : hours}:${
    mins.length < 2 ? `0${mins}` : mins
  }`;
}

const getThreeHoursWeather = (dayInMonth) => {
  const { forecast } = dayInMonth;
  const time = forecast.map((elem) => elem.dt).map((el) => transformTime(el));
  return forecast.reduce(
    (acc, el, index) =>
      acc.push({
        el: el,
        icon: el.weather[0].icon,
        temp: Math.floor(el.main.temp),
        time: t[index],
      }),
    []
  );
};

export default getThreeHoursWeather;
