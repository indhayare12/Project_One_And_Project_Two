//	Grab	the	button	and	the	<body>	element	once.
const	toggleButton	=	document.getElementById("theme-toggle"); 
const	body	=	document.body;

//	The	key	we	use	in	localStorage.
const	STORAGE_KEY	=	"preferred-theme";
//	When	the	button	is	clicked,	flip	the	theme	and	update	the	label.
function	handleToggleClick()	{
    const	isDarkNow	=	body.classList.toggle("dark");
    if	(isDarkNow)	{ toggleButton.textContent	=	"☀		Light	mode"; localStorage.setItem(STORAGE_KEY,	"dark"); }	
    else	{ toggleButton.textContent	=	"	Dark	mode"; localStorage.setItem(STORAGE_KEY,	"light"); 

    } 
}
//	Wire	up	the	click	event. 
toggleButton.addEventListener("click",	handleToggleClick);



function	loadSavedTheme()	
{ const	savedTheme	=	localStorage.getItem(STORAGE_KEY); 
    if	(savedTheme	===	"dark")	
        { body.classList.add("dark"); toggleButton.textContent	=	"☀		Light	mode"; }	
    else	{ //	Default	=	light.	Make	sure	the	button	label	is	correct. 
    toggleButton.textContent	=	"	Dark	mode"; 
    } 
}
loadSavedTheme();