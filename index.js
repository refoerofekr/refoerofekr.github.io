let timer;
const timerDisplay = document.getElementById('seconds');
let actualCoef = 1;

// функция запуска таймера
function startTimer() {	 	
    let gameCoef = Math.random()*5; // генерация игрового коэффициента
    let seconds = 1000; // время для таймера
    let bar_width = 100; // длина полоски таймера
	  
    timerDisplay.textContent = seconds;
    timer = setInterval(() => {   
	timerDisplay.style.color = '#fff';
	bar_width = bar_width-0.1; // изменение полоски таймера
	seconds--; // изменение времени таймера
	document.getElementById('bar').style.width = bar_width + '%'; // изменение длины полоски таймера
	timerDisplay.textContent = (seconds/100).toFixed(2) + 's'; // вывод таймера
	// когда таймер доходит до нуля
	if (seconds === 0) {
	    clearInterval(timer); 
	    timerDisplay.innerHTML = 'x1.00';
	    timerDisplay.style.color = '#8F7DE1';
	    // процесс игры 
	    let test = setInterval(function coefCounter(){
	        actualCoef += 0.01;
	        timerDisplay.innerHTML = 'x' + actualCoef.toFixed(2); // вывод актуального коэффициента
		console.log(gameCoef)
		// если коэфиициент еще не равен сгенерированному 
		if (actualCoef > gameCoef){
		    clearInterval(test);
		    timerDisplay.innerHTML = 'x' + gameCoef.toFixed(2) // вывод конечного коэффициента
		    timerDisplay.style.color = '#A855FA';
	   	    document.getElementById('coef1').innerHTML = gameCoef.toFixed(2);  // добавление первого коэффициента в список
		   	document.getElementById('coef1').style.color = '#8F7DE1'
		    actualCoef = 1;}
		// если конечный коэффициент сгенерировался меньше единицы
		if (gameCoef<1.01){		
		    clearInterval(test);
		    timerDisplay.innerHTML = 'x1.00';
		   	document.getElementById('coef1').innerHTML = '1.00'
		   	document.getElementById('coef1').style.color = '#A855FA'
		    timerDisplay.style.color = '#A855FA';
		    actualCoef = 1;}
		}, 150 // частота обновления дисплея коэффициента
		)}
	}, 10 // частота обновления таймера
	);}

	startTimer();