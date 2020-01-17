	function processAdding(list,valueCounter){
		var labelItem = document.querySelector(".item-label");
		var newItemValue = labelItem.value;

		if(newItemValue.length > 0){
	// ITEM ET PUSH INTO LIST
	var newItem = {};
	newItem.label = newItemValue;
	var countItem = list.push(newItem);

	var parent = document.querySelector(".list");

	var liElement = document.createElement("li");
	liElement.setAttribute("class","listElement");

	var spanElement = document.createElement("span");
	spanElement.setAttribute("class","numberList");
	spanElement.innerHTML = countItem;

	var spanLabel = document.createElement("span");
	spanLabel.setAttribute("class","label");
	spanLabel.innerHTML = newItem.label;

	var aElement = document.createElement("a");
	aElement.setAttribute("href","#");
	aElement.setAttribute("class","btn-delete");
	aElement.innerHTML = "suppr";
	
	parent.appendChild(liElement);

	liElement.appendChild(spanElement);
	liElement.appendChild(spanLabel);
	liElement.appendChild(aElement);

	// UPDATE TOTAL ITEM
	valueCounter.innerHTML = countItem;
}
}

function countItem(list,valueList,valueCounter){
	for (var valeur of list) {
		valueList.insertAdjacentHTML('beforebegin','<li class="listElement"><span class="numberList">'+ i +'</span>'+ valeur.label +'</li>');
		console.log("valueList");
		var counter = i++;
		console.log(i);
	};

	// If no product 
	if(! counter){
		counter = 0;
	}

	valueCounter.innerHTML = counter;
}