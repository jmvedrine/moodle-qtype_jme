
function getSmiles(textfieldid) {
	document.getElementById(textfieldid).value = document.getElementById('JME' + textfieldid).smiles();
}

function getSmilesEdit(buttonname){
    var buttonnumber= buttonname.slice(7,-1);
	textfieldid = 'id_answer_' + buttonnumber;
	document.getElementById(textfieldid).value = document.getElementById('JME').smiles();
}
