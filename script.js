const exitBtn = document.querySelector('#ExitBtn');

exitBtn.addEventListener('click', () => {
	changeText('WelcomeText', 'textColorBlue', 'Goodbye world!');
})

function changeText (htmlElementID, addClass, newInnerText){	
	const selectedElement = document.querySelector(`#${htmlElementID}`);
		addClass !== null || undefined ? 
			selectedElement.classList.add(`${addClass}`) : //if
			selectedElement.classList.remove(); //else

		newInnerText !== null || undefined ?
			selectedElement.innerText = newInnerText : //if
			selectedElement.innerText = selectedElement.innerText; //else
}
