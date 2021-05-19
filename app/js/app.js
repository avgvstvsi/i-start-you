import gsap from "gsap";

document.addEventListener('DOMContentLoaded', () => {

	const tl = gsap.timeline(),
	  body = document.querySelector("body"),
      logo = document.getElementById("logo"),
      cloud = document.getElementById("cloud"),
      cloudTxt = document.getElementById("cloud-txt"),
      btnPink = document.getElementById("btn_pink"),
      btnBlue = document.getElementById("btn_blue"),
      btnPinkTxt = document.getElementById("btn_pink__txt"),
      btnBlueTxt = document.getElementById("btn_blue__txt"),
      bodyHeight = body.offsetHeight,
      viewHeight = window.innerHeight;

	tl.pause();
	tl.fromTo(logo, {yPercent: 305, scale: 1.25}, {yPercent: 0, scale: 1, duration: 1, ease: "power1.InOut"});
	tl.fromTo(cloud, {autoAlpha: 0, scale: 0.75}, {autoAlpha:1, scale: 1, duration: 1, ease: "bounce.InOut"});
	tl.fromTo(cloudTxt, {autoAlpha: 0}, {autoAlpha:1, duration: 1});
	tl.fromTo([btnPink, btnBlue], {autoAlpha: 0, yPercent:100}, {autoAlpha:1, yPercent: 0, duration: 1, ease: "power1.InOut"});
	tl.fromTo(btnPinkTxt, {autoAlpha: 0}, {autoAlpha:1, duration: 0.5});
	tl.fromTo(btnBlueTxt, {autoAlpha: 0}, {autoAlpha:1, duration: 0.5});

	window.addEventListener("scroll", function () {

		const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
			progress = scrollTop / (bodyHeight - viewHeight);
		tl.progress( progress );
		
	});

})
