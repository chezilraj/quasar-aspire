export const addCard = (state, card) => {
  if (state.allCards.length > 0) {
    state.allCards.unshift(card);
  } else {
    state.allCards = card;
  }
};
