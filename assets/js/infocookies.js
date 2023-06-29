function WHCheckCookies(){
	if(!localStorage.cookies_accepted) {
		document.getElementById("cookies-message").style.display = "block"
	} 
}
function WHCloseCookiesWindow(){
	localStorage.cookies_accepted = true;
	document.getElementById("cookies-message").remove();
}
	
window.onload = WHCheckCookies;