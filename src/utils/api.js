const PATH = "../static/data.json";

export function getDonors() {
  return fetch(PATH)
    .then(r => r.json())
    .then(data => console.log(data));
}
