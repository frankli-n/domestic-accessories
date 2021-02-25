// // 
// // For clicking on the doom button
// // 
// document.querySelector('.bush-basha').addEventListener('click', () => {
//   document.getElementById("yonder").style.visibility = "hidden";
//   document
// })

function changeImage(){
	console.log(document.getElementById("a").src)
	if (document.getElementById("a").src == "http://localhost:3002/pics/gymshark.png") {
		document.getElementById("a").src = "http://localhost:3002/pics/gymshark-back.png"
	}
	else {
		document.getElementById("a").src = "http://localhost:3002/pics/gymshark.png"
	}
}