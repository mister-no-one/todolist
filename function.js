	function processAdding(){

		var labelItem = document.querySelector(".item-label");
		var newItemValue = labelItem.value;

		if(newItemValue.length > 0){
	// ITEM ET PUSH INTO LIST
	var newItem = {};
	newItem.label = newItemValue;
	var countItem = list.push(newItem);

	// VIEW PROCESSING
	valueList.insertAdjacentHTML('beforebegin','<li class="listElement"><span class="numberList">'+ countItem +'</span>'+ newItem.label +'</li>');

	// UPDATE TOTAL ITEM
	valueCounter.innerHTML = countItem;
}
}