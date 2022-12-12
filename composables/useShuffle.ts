/**
 * Shuffle any deck. Very simple 1000 ct swap.
 * @param deck - any[]
 * @returns any[]
 */
export default function (deck: []) {
  for (let a = 0; a < 1000; a++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
  return deck;
}
