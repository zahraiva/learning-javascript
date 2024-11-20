let username = window.prompt('enter username: ');
// username = username.trim();
// let firstletter = username.charAt(0);
// firstletter = firstletter.toLocaleUpperCase();
// let otherletters = username.slice(1);
// otherletters = username.toLocaleLowerCase();
// username = firstletter + otherletters;

// console.log(username);

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(`Hello, ${username}`);