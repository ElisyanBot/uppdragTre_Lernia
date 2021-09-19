const exitBtn = document.querySelector('#ExitBtn');

exitBtn.addEventListener('click', () => {
	changeText('welcomeText', 'textColorBlue', 'Goodbye world!');
})

function changeText (htmlElement, addClass, newInnerText){	
	const selectedElement = document.querySelector(`.${htmlElement}`);
		addClass !== null || undefined ? 
			selectedElement.classList.add(`${addClass}`) : //if
			selectedElement.classList.remove(); //else

		newInnerText !== null || undefined ?
			selectedElement.innerText = newInnerText : //if
			selectedElement.innerText = selectedElement.innerText; //else
}