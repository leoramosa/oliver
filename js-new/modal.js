document.getElementById('btn-modal-new').addEventListener('click', function () {
	document.getElementById('overlay-new').classList.add('is-visible');
	document.getElementById('modal-new').classList.add('is-visible');
});

document.getElementById('close-btn-new').addEventListener('click', function () {
	document.getElementById('overlay-new').classList.remove('is-visible');
	document.getElementById('modal-new').classList.remove('is-visible');
});
document
	.getElementById('close-btn-new-2')
	.addEventListener('click', function () {
		document.getElementById('overlay-new').classList.remove('is-visible');
		document.getElementById('modal-new').classList.remove('is-visible');
	});
document.getElementById('overlay-new').addEventListener('click', function () {
	document.getElementById('overlay-new').classList.remove('is-visible');
	document.getElementById('modal-new').classList.remove('is-visible');
});

/* MODAL2 */
document
	.getElementById('btn-modal-new-2')
	.addEventListener('click', function () {
		document.getElementById('overlay-new-2').classList.add('is-visible-2');
		document.getElementById('modal-new-2').classList.add('is-visible-2');
	});

document
	.getElementById('close-btn-new-3')
	.addEventListener('click', function () {
		document.getElementById('overlay-new-2').classList.remove('is-visible-2');
		document.getElementById('modal-new-2').classList.remove('is-visible-2');
	});
document
	.getElementById('close-btn-new-4')
	.addEventListener('click', function () {
		document.getElementById('overlay-new-2').classList.remove('is-visible-2');
		document.getElementById('modal-new-2').classList.remove('is-visible-2');
	});
document.getElementById('overlay-new').addEventListener('click', function () {
	document.getElementById('overlay-new').classList.remove('is-visible-2');
	document.getElementById('modal-new-2').classList.remove('is-visible-2');
});
