import generateJoke from "./generateJoke";
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laughingImg = document.getElementById('laughImg');
laughingImg.src  =laughing;

generateJoke(); 
const getJoke = document.getElementById("jokeBtn");

getJoke.addEventListener('click',generateJoke);



