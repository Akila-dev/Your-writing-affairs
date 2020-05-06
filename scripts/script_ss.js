// if (window.innerWidth >= 992) {
// 	document.getElementById("blog-sidenav").style.width = 25/window.innerWidth;
// 	document.getElementById("blog-main").style.margin = "0 0 0 "+ 25/window.innerWidth;
// }
// window.addEventlListener('resize', function(){
// 	if (window.innerWidth >= 992) {
// 		document.getElementById("blog-sidenav").style.width = 25/window.innerWidth;
// 		document.getElementById("blog-main").style.margin = "0 0 0 "+ 25/window.innerWidth;
// 	} else {
// 		document.getElementById("blog-sidenav").style.width = "0";
// 	}
// })
function openNav() {
    document.getElementById("blog-sidenav").style.width = "330px";
    document.getElementById("blog-nav").style.display = "none"
    document.getElementById("blog-main").style.margin = "0 0 0 330px";
    document.getElementById("blog-main").style.backround = "rgba(0, 0, 0, .9)";
}
function closeNav() {
    document.getElementById("blog-sidenav").style.width = "0";
    setTimeout(function(){
    	document.getElementById("blog-nav").style.display = "block"
	}, 250);
    document.getElementById("blog-main").style.margin = "0";
    document.getElementById("blog-main").style.backround = "rgba(0, 0, 0, 0)";
}