(() => {
		console.log('Hello professor');

		// these are the elements that you want to referecnce on the page (the icons in this case)
		// // querySelector gets one result
		var icons = document.querySelector("img");

		// ges=ts a reference to all the elements that match the selector
		var otherIcons = document.querySelectorAll('.jpgIcon');
		
		// functions are the same in js as in Python: what do you want to have happen on a click?
		function logIconId() {
			console.log(this.id);
			debugger;

		}

		// what events are we listening for? clicks? mouseover? and what should happen when we hear one
		icons.addEventListener("click", logIconId);
		
		//debugger;
		otherIcons.forEach(thisbadge => thisbadge.addEventListener("click", logIconId));

		// this is the same as print in python
}) ();