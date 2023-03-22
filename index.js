
const items = {
  A:50,
  B:40,
  C:30,
  D:20,
  E:10,
  F:5,
  G:1
};
function checkout (str) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      total += items[str[i]];
    }
    return total;
  }
  
  const lettersInput = document.getElementById('letters-input');
  const sumBtn = document.getElementById('sum-btn');
  const resultDiv = document.getElementById('result');
  
  sumBtn.addEventListener('click', () => {
    const input = lettersInput.value.toUpperCase();
    const sum = checkout (input);
    resultDiv.innerText = `The price of '${input}' is ${sum}`;
  });
  