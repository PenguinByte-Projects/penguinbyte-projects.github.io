const isMobile = typeof screen.orientation !== 'undefined';
console.log("Mobile User: " + isMobile)
if (isMobile==true) {
	document.getElementsByTagName("head")[0].innerHTML += '<link rel="stylesheet" href="/style/mobile.css">'
}
else {
	document.getElementsByTagName("head")[0].innerHTML += '<link rel="stylesheet" href="/style/desktop.css">'
}
