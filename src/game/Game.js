const NewGame = () => {
  let score = 0;

  const getScore = () => score;

  const incrementScore = () => score += 1;

  return {
    getScore,
    incrementScore
  }
}

export default NewGame