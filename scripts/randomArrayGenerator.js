function randomArrayGenerator(count, max) {
  let numbers = [];

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * max);

    numbers.push(randomNumber);
  }

  return numbers;
}



export default randomArrayGenerator
