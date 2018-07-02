/*
	
let profile = { name: 'Даша', surName: 'Пирогова' }

function Profile (data) {
	this.name = data.name;
	this.surName = data.surName;
	this.fullName = function () {
		return `${this.name} ${this.surName}`;
 	}
}

let ProfileObj = new Profile(profile);

console.log(ProfileObj.fullName())

home work:
состряпать фотогалерею: complete!
*/


document.addEventListener('DOMContentLoaded', function(){

let galleryMain = document.querySelector('.gallery-main');
let galleryItem = document.querySelectorAll('.gallery-item');

galleryItem.forEach((that) => {
	that.addEventListener('mouseover', (changePhoto) => {
		let newImage = that.style.backgroundImage;
		galleryMain.style.backgroundImage = newImage;
		galleryItem.forEach((that2) => {
			that2.classList.remove('active');
		});
		that.classList.add('active');
	})
})

});
