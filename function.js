function processAdding(list,valueCounter){

	console.log("start processing adding");
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

	aElement.addEventListener('click',function(e){
		e.target.parentNode.classList.add("deleted-element");
		console.log(e);
		console.log(e.target);
	});

	// UPDATE TOTAL ITEM
	valueCounter.innerHTML = countItem;
	console.log("end processing adding");
}
}

function countItem(list,valueList,valueCounter){
	for (var valeur of list) {
		var counter = i++;
	};

	// If no product 
	if(! counter){
		counter = 0;
	}

	valueCounter.innerHTML = counter;
}

