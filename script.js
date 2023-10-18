document.addEventListener('DOMContentLoaded', function () {
	const inputTelephone = document.getElementById('telephone');
	const messageErreur = document.getElementById('erreur-telephone');
	const regexTelephone = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/; // Adaptez cette regex selon le format désiré

	inputTelephone.addEventListener('input', function() {
		const estValide = regexTelephone.test(inputTelephone.value);
		if (!estValide) {
			messageErreur.textContent = 'Numéro de téléphone invalide.';
		} else {
			messageErreur.textContent = '';
		}
	});

	// Pour empêcher l'envoi du formulaire si le numéro est invalide
	document.getElementById('formulaire-demo').addEventListener('submit', function(e) {
		if (!regexTelephone.test(inputTelephone.value)) {
			e.preventDefault();
			alert('Veuillez fournir un numéro de téléphone valide.');
		}
	});
});