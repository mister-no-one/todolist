var List = [
{
	label:"Ananas", status:"suppr", important:"1"
},
{
	label:"Banane", status:"suppr", important:"1"
},
{
	label:"Pomme", status:"suppr", important:"1"}];

	var i = 1;
	for (var valeur of List) {
		var valueList = document.querySelector(".list");
		valueList.insertAdjacentHTML('beforebegin','<li class="listElement"><span class="numberList">'+ i +'</span>'+ valeur.label +'</li>');
		console.log("valueList");
		var counter = i++;
	};

	var valueCounter= document.querySelector(".number");
	valueCounter.innerHTML = counter;

	





	var formItem = document.querySelector(".submit");
	formItem.addEventListener("submit",function(e){
		e.preventDefault();
		processAdding();
	});

	console.log(formItem);

	function processAdding(){
		var labelItem = document.querySelector(".item-label");
		var value = labelItem.value;
		console.log(labelItem);


	}