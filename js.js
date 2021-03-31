// I dalis

// 1. pasiimti MAIN elementą, jam priskirti klasę body
const main = document.querySelector('main');
main.setAttribute('class', 'body');
console.log(main);
// 2. pasiimti H1 elementą, jam priskirti klasę heading
const h1Element = document.querySelector('h1');
h1Element.setAttribute('class', 'heading');
console.log(h1Element);
// 3. pasiimti FORM elementą, jam priskirti klasę form
const formElement = document.querySelector('form');
formElement.setAttribute('class', 'form');
// 4. sukurti ir į UL elementą įterpti BENT vieną li elementą su klase list-item.
const ul = document.getElementById('todo');
const li = document.createElement('li');
li.classList.add('list-item');
li.innerText = 'blabla';
ul.appendChild(li);



// II dalis

// 1. įgyvendinti sąrašo funkcionalumą: paspaudus ant li elemento, jam pridedama (jei nėra) klasė .done, ir nuimama jei yra
li.addEventListener('click', function(){
	li.classList.toggle('done');

})



// III dalis

// panaudoti iki šiol parašytą kodą ir pabaigti programą:
// 1. vartotojui įvedus tekstą input laukelyje, tekstas pridedamas į sąrašą (kartojame veiksmus: elementas sukuriamas, jam priskiriamas input tekstas, klasė list-item, naujas elementas įtraukiamas į ul)
const button = document.getElementById('button');
const input = document.getElementById('input');

button.addEventListener('click', function(){
	const li = document.createElement('li');
	li.classList.add('list-item');
	li.innerText = input.value;
	ul.appendChild(li);

// 2. pridėjus tekstą į sąrašą input laukas išvalomas
	input.value = '';
})

// 3. du kartus paspaudus list elementą jis pašalinamas
li.addEventListener('dblclick', function(){
	li.remove();
})