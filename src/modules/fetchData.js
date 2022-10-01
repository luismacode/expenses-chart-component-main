async function fetchData() {
  return fetch("src/data/data.json")
    .then((res) => res.json())
    .then((data) => data);
}

export const data = await fetchData();
