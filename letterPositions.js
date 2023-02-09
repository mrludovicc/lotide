let letterPosition = (str) => {
  let string = str.toLowerCase().split(' ').join('');
  let letters = {};
  for (let i = 0; i < string.length; i++) {
    if (!letters[string[i]]) {
      letters[string[i]] = [i]
    } else {
      letters[string[i]].push(i);
    }
  } console.log(letters)

};
letterPosition('Hello There amigo')