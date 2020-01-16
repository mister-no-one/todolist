var list = [
{
	label:"Ananas", status:"suppr", important:"1"
},
{
	label:"Banane", status:"suppr", important:"1"
},
{
	label:"Pomme", status:"suppr", important:"1"}];


	var valueList = document.querySelector(".list");
	var i = 1;



	for (var valeur of list) {
		
		valueList.insertAdjacentHTML('beforebegin','<li class="listElement"><span class="numberList">'+ i +'</span>'+ valeur.label +'</li>');
		console.log("valueList");
		var counter = i++;
	};

	var valueCounter= document.querySelector(".number");
	valueCounter.innerHTML = counter;

	

	var formItem = document.querySelector(".form");
	formItem.addEventListener("submit",function(e){
		e.preventDefault();
		processAdding();
	});

	console.log(formItem);

	function processAdding(){

		var labelItem = document.querySelector(".item-label");
		var newItemValue = labelItem.value;

	// ITEM ET PUSH INTO LIST
	var newItem = {};
	newItem.label = newItemValue;
	var countItem = list.push(newItem);

	// VIEW PROCESSING
	valueList.insertAdjacentHTML('beforebegin','<li class="listElement"><span class="numberList">'+ countItem +'</span>'+ newItem.label +'</li>');

	// UPDATE TOTAL ITEM
	var valueCounter= document.querySelector(".number");
	valueCounter.innerHTML = countItem;
}
