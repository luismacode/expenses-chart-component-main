export function generateTemplate(strings, ...keys) {
  return function () {
    const temp = strings.slice();
    keys.forEach((key, i) => {
      temp[i] += key;
    });
    return temp.join("");
  };
}

export const generateElements = (str) => {
  const node = new DOMParser().parseFromString(str, "text/html").body
    .firstElementChild;
  return node;
};
