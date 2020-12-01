export function random(max, min = 0) {
  const num = max - min;
  return Math.ceil(Math.random() * num) + min;
};

export function getElByID(id) {
  return document.getElementById(id);
};


export function countBtn(count = 6, btn) {
  const innerText = btn.innerText;
  btn.innerText = `${innerText} (${count})`;
  return function () {
    count--;
    if (count === 0) {
      btn.disabled = true;
    }
    btn.innerText = `${innerText} (${count})`;
    return count;
  };
}

