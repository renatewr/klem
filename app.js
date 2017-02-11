

const heading = document.querySelector('.jump');


function sparanWrap(word) {
  return [...word].map(letter => `<span>${letter}</span>`).join('');
}

heading.innerHTML = sparanWrap(heading.textContent);
