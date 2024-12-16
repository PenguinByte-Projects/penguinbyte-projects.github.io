function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
}
if (isMobileDevice()) {
	document.getElementsByTagName("head")[0].innerHTML += '<link rel="stylesheet" href="/style/mobile.css">'
}
else {
	document.getElementsByTagName("head")[0].innerHTML += '<link rel="stylesheet" href="/style/desktop.css">'
}
