var list = [];

var valueList = document.querySelector(".list");
var i = 1;

// COUNT
var valueCounter = document.querySelector(".number");
countItem(list,valueList,valueCounter);

// FORMULAIRE
var formItem = document.querySelector(".form");
formItem.addEventListener("submit",function(e){
	e.preventDefault();
	processAdding(list,valueCounter);
	formItem.reset();
});

// TODO 
// - LOCAL STORAGE 
// - AFFICHER / MASQUER AJOUT NOUVEAU PRODUIT