function getRandomColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  return color.length < 6 ? getRandomColor() : color;
}
