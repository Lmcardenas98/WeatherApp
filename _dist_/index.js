

const card = async (city) => {
  const apiKey = "21d807407fc08f0dca752a98c2c9b2d1";
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=sp`;
  const response = await fetch(api);

  if (response.status !== 200) {
    return false;
  }
  const weatherData = await response.json();
  const {name, sys, main, weather, id} = weatherData;

  const container = document.createElement('div')
  container.className = 'container';

  const img = document.createElement('img');
  img.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

  const cityI = document.createElement('h2');
  cityI.innerText = name;
  cityI.className = 'city'

  const tempe = document.createElement('h2');
  let value = `${parseInt(main.temp - 273.15)}º`
  tempe.innerText = value;
  tempe.className = 'temp'

  const close = document.createElement('button');
  close.innerText = 'X';
  close.className= 'close';

  container.append(cityI, close, tempe, img)


  return container
}

const node = document.querySelector('.cards')
const button = document.querySelector('.launch')
const closeButton = document.querySelector('.flush');

const flush = () => {
  const containers = document.querySelectorAll('.container')
  for (let i of containers){
    i.remove();
  }
}

const handlerClick = async (event) => {
  const inputVal = document.getElementById('input').value
  const card1 = await card(`${inputVal}`)
    if (card1) {
      node.append(card1)
    }
}

closeButton.addEventListener('click', flush)
button.addEventListener('click', handlerClick)

