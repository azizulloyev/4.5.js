let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1; 
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

console.log(` 0${day}.0${month}.${year},  ${hours}:${minutes}:${seconds}`);