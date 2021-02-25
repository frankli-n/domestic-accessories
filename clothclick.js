// // 
// // For clicking on the doom button
// // 
// document.querySelector('.bush-basha').addEventListener('click', () => {
//   document.getElementById("yonder").style.visibility = "hidden";
//   document
// })

function changeGymShark(){
	console.log(document.getElementById("gsk-img").src)
	if (document.getElementById("gsk-img").src == "http://localhost:3002/pics/gymshark.png") {
		document.getElementById("gsk-img").src = "http://localhost:3002/pics/gymshark-back.png"
	}
	else {
		document.getElementById("gsk-img").src = "http://localhost:3002/pics/gymshark.png"
	}
}

function changeBushBasha(){
	console.log(document.getElementById("bb-img").src)
	if (document.getElementById("bb-img").src == "http://localhost:3002/pics/d.png") {
		document.getElementById("bb-img").src = "http://localhost:3002/pics/basha2.png"
	}

	else if (document.getElementById("bb-img").src == "http://localhost:3002/pics/basha2.png") {
		document.getElementById("bb-img").src = "http://localhost:3002/pics/basha3.png"
	}

	else if (document.getElementById("bb-img").src == "http://localhost:3002/pics/basha3.png") {
		document.getElementById("bb-img").src = "http://localhost:3002/pics/basha4.png"
	}

	else if (document.getElementById("bb-img").src == "http://localhost:3002/pics/basha4.png") {
		document.getElementById("bb-img").src = "http://localhost:3002/pics/basha5.png"
	}

	else if (document.getElementById("bb-img").src == "http://localhost:3002/pics/basha5.png") {
		document.getElementById("bb-img").src = "http://localhost:3002/pics/basha6.png"
	}

	else if (document.getElementById("bb-img").src == "http://localhost:3002/pics/basha6.png") {
		document.getElementById("bb-img").src = "http://localhost:3002/pics/basha7.png"
	}

	else {
		document.getElementById("bb-img").src = "http://localhost:3002/pics/d.png"
	}
}