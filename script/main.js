// define contant varible
gRandBtn = null;

// button colors
var btnColors = ['black','white','orange',
                 'green','pink','gray',
                 'red','blue','rosy'];

window.onload   = onLoad;
window.onresize = onWindowResize;

// when widnow is loaded
function onLoad(){
	gRandBtn = document.getElementById("button");
    setCenterInWindow(gRandBtn);
	chooseButtonColor();
	selectSiteHrefByRandom(gRandBtn);
	setPageToLocaleString();
}

// when window is resized
function onWindowResize(){
	setCenterInWindow(gRandBtn);
}

// set button position
function setCenterInWindow(button){
	var win = {
		w:window.innerWidth,
		h:window.innerHeight
	}

	button.style.position = "absolute";
	button.style.left     = (win.w - button.offsetWidth) / 2 + "px";
	button.style.top      = (win.h - button.offsetHeight) / 2 + "px";
}

// change the random_go button color
// @param i:int the color index
function changeButtonColor(button,i)
{
	button.className = btnColors[i];
}

//
// choose a button'color when open the window 
function chooseButtonColor()
{
	var i = -1;
	while(i < 0 || i > btnColors.length - 1)
	{
		i = Math.round(Math.random()*10);
	}
	
	changeButtonColor(gRandBtn, i);
}

// select a site from gWebsites by random
function selectSiteHrefByRandom(button)
{
	var sites = getSitesData();
	
	genrate:
	var roll = -1;
	
	while(roll < 0 || roll > sites.length - 1)
	{
		roll = Math.round(Math.random() * sites.length);
	}
	
	button.href = sites[roll];
}

// set the page content text to locale string
function setPageToLocaleString()
{
	setLocalString(gRandBtn,chrome.i18n.getMessage("buttonText"));	// 设置按钮文字
	setLocalString(document.getElementById("author"),chrome.i18n.getMessage("authorLabel") + ":aokihu"); //设置作者文字
	setLocalString(document.getElementById("feedback_hyperlink"),chrome.i18n.getMessage("feedbackLabel"));
}

// set locale string
function setLocalString(element,localString)
{
	element.innerHTML = localString;
}

// ping a web site
function ping(url)
{
	
}