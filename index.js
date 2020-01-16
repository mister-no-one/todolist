var List = [
{
	label:"Ananas", status:"suppr", important:"1"
},
{
	label:"Banane", status:"suppr", important:"1"
},
{
	label:"Pomme", status:"suppr", important:"1"}];


	for (var valeur of List) {
		var valueList = document.querySelector(".list");
		valueList.insertAdjacentHTML('afterbegin','<li>'+ valeur.label +'</li>');
		console.log("valueList");
	};