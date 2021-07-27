const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the fabulous text-content!';

container.appendChild(content);



const text = document.createElement('p');
         text.textContent = 'Hey I\'m red!';
         text.style.color = 'red';

container.appendChild(text);



const textOne = document.createElement('h3');
        textOne.textContent = ' I\'m a blue h3!';
        textOne.style.color = 'blue';

container.appendChild(textOne);


const anotherDiv = document.createElement('div');
        anotherDiv.setAttribute('style','background:pink ; border: 1px solid black');

const textTwo = document.createElement('h1');
      textTwo.textContent = 'I\'m in a div';

const textThree = document.createElement('p');
      textThree.textContent = 'ME TOO!';
      
      anotherDiv.appendChild(textTwo);
      anotherDiv.appendChild(textThree);

container.appendChild(anotherDiv);



