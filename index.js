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
		formItem.reset();
	});

	console.log(formItem);

	console.log(list);


