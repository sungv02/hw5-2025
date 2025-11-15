var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead Video");
	video.currentTime += 10;
	console.log("New time is " + video.currentTime);
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute/Unmute Video");
	if (this.clicked){
		video.muted = true;
		document.getElementById('mute').textContent = "Unmute";
	}
	else {
		video.muted = false;
		document.getElementById('mute').textContent = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Volume Slider Change");
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Apply Vintage Effect");
	video.classList.toggle("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove Vintage Effect");
	video.classList.remove("oldSchool");
});