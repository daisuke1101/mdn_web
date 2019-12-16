const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertX = ['Willy the Goblin' , 'Big Daddy' , 'Father Christmas'];
var insertY = ['the soup kitchen' , 'Disneyland' , 'the White House'];
var insertZ = ['spontaneously combusted' , 'melted into a puddle on the sidewalk' , 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  let newStory2 = newStory.replace(/:insertx:/g , xItem).replace(/:inserty:/g , yItem).replace(/:insertz:/g , zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory2 = newStory2.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {

    const Pound = 300;
    const Fahrenheit = 94;

    let stone = (Pound / 14)
    let celsius = ((Fahrenheit - 32) * 5 / 9);

    let weight = Math.round(stone) + ' stone';
    let temperature =  Math.round(celsius) + ' centigrade';

    newStory2 = newStory2.replace('300 pounds',weight);
    newStory2 = newStory2.replace('94 fahrenheit',temperature);

  }

  story.textContent = newStory2;
  story.style.visibility = 'visible';
}


