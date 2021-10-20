const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const favoriteColor = prompt("Inserisci il tuo colore preferito");

console.log(firstName);
console.log(lastName);
console.log(favoriteColor);

const textToShare = `
  ${firstName}${lastName}${favoriteColor}21
`;

document.getElementById('utente').innerHTML = textToShare;