function countWords(str) {
  const arr = str.split(' ');

  //   return arr.filter((word) => word !== '').length;

  //   We used the String.trim() method to remove any
  // leading and trailing whitespace from the string.
  return str.trim().split(/\s+/).length;

  //   Use the String.split() method to split the string by one or more spaces
}

const countBtn = document.getElementById('count-btn');

countBtn.addEventListener('click', () => {
  const inputText = document.getElementById('input');

  const wordCount = countWords(inputText.value);
  //   console.log(wordCount);

  const showCount = document.getElementById('showcount');
  showCount.innerHTML = wordCount;
});
