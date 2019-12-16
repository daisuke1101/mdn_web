var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    
var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

   var i = 0;

   while (i < people.length) {
     if((people[i] === 'Phil') || (people[i] === 'Lola')) {
       refused.textContent += people[i] + ',';
     } else {
       admitted.textContent += people[i] + ',';
     }
     i++;
    }

   admitted.textContent = admitted.textContent.slice(0,-1);
   refused.textContent = refused.textContent.slice(0,-1);
