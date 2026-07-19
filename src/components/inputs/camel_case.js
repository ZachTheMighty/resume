export default function camelCase(string) {
  return string
    .split(" ")
    .map((string, index) => {
      if (index === 0) return unCapitzlize(string);
      else return capitalize(string);
    })
    .join("");
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function unCapitzlize(string) {
  return string[0].toLowerCase() + string.slice(1);
}
