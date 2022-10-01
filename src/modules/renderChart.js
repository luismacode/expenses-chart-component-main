import { data } from "./fetchData.js";
import { generateTemplate, generateElements } from "./generateBarChart.js";
import {
  formatToDollar,
  isCurrentDay,
  getDayOfWeek,
} from "../helpers/index.js";

const chart = document.getElementById("chart");

const getMaxHeight = () => {
  const barsHeight = data.map((i) => Math.round(i.amount));
  return Math.max(...barsHeight);
};
const getBarHeight = (item) => {
  const maxHeight = getMaxHeight();
  const barHeight = (Math.round(item) * 100) / maxHeight;
  return barHeight;
};

data.map((item) => {
  const template = generateTemplate`
    <div class="bar">
        <div data-height="${getBarHeight(item.amount)}" class="bar__inner">
            <button type="button" class="bar__button 
            ${
              isCurrentDay(getDayOfWeek(item.day))
                ? "bar__button--cyan"
                : "bar__button--red"
            }" 
            title="${getDayOfWeek(item.day)}'s Spending">
            </button>
            <span class="bar__label-y"> ${formatToDollar(item.amount)} </span>
        </div>
        <span class="bar__label-x">${item.day}</span>
    </div>`(item);
  const bar = generateElements(template);
  chart.appendChild(bar);
  return chart;
});

const bars = document.querySelectorAll(".bar");

bars.forEach((bar) => {
  const barInner = bar.firstElementChild,
    barHeight = barInner.dataset.height;
  barInner.style = `height:${barHeight}px`;
  barInner.animate([{ height: "0px" }, { height: `${barHeight}px` }], {
    duration: 1200,
  });
});
