import type { SorryDeck } from "~~/types/types";
const cards = [
  {
    value: "1",
    count: 5,
    description: "Move a pawn from START or if in play, move forward 1 space."
  },
  {
    value: "2",
    count: 4,
    description: "Move a pawn from START or if in play, move forward 2 spaces."
  },
  {
    value: "3",
    count: 4,
    description: "Move foward 3."
  },
  {
    value: "4",
    count: 4,
    description: "Move backward 4."
  },
  {
    value: "5",
    count: 4,
    description: "Move forward 5."
  },
  {
    value: "7",
    count: 4,
    description: "Move forward 7 or split the move between two of your pawns."
  },
  {
    value: "8",
    count: 4,
    description: "Move forward 8."
  },
  {
    value: "10",
    count: 4,
    description: "Move forward 10 or move backward 1."
  },
  {
    value: "11",
    count: 4,
    description: "Move forward 11 or change places with an opponent."
  },
  {
    value: "12",
    count: 4,
    description: "Move forward 12."
  },
  {
    value: "SORRY!",
    count: 4,
    description: `Move a pawn from your start area to take the place of another player's pawn, which must return to its own start area. or move forward 4`
  }
];

/**
 * Sorry deck, generated from dictionary.
 *
 * @returns Unshuffled Sorry deck.
 */
export default function () {
  let deck: SorryDeck[] = new Array();

  for (let i = 0; i < cards.length; i++) {
    for (let v = 0; v < cards[i].count; v++) {
      deck.push({ value: cards[i].value, description: cards[i].description });
    }
  }

  return deck;
}
