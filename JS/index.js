const inputRange = document.querySelector('.inputRange__input');
const spanRange = document.querySelector('.spanRange');
inputRange.addEventListener('click', () => {
  spanRange.innerHTML = `${inputRange.value}%`;
});
