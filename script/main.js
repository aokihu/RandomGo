// define contant varible
gRandBtn = null;

window.onload   = onLoad;
window.onresize = onWindowResize;

// when widnow is loaded
function onLoad(){
	gRandBtn = document.getElementById("button")
    setCenterInWindow(gRandBtn);
	changeButtonColor(gRandBtn,2);
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
	var colors = ['black','white','orange',
                  'green','pink','gray',
                  'red','blue','rosy'];

	button.className = colors[i];
}

// select a site from gWebsites by random
function selectSiteHrefByRandom(button)
{
	genrate:
	var roll = -1;
	
	while(roll < 0 || roll > gWebsites.length)
	{
		roll = Math.round(Math.random() * 100);
	}
	
	button.href = gWebsites[roll];
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