const PATH = "/data.json";

export async function getDonors() {
  let response = await fetch(PATH);
  let data = await response.json();
  let donors = JSON.parse(data);

  let topTen = getTop10(donors);
  console.log(topTen);
  return topTen;
}

function getTop10(donors) {
  donors.sort((a, b) => {
    if (b.amount < a.amount) {
      return -1;
    }

    if (b.amount > a.amount) {
      return 1;
    }

    return 0;
  });

  return donors.slice(0, 10);
}
