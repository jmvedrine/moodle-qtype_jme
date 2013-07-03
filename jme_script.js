function getSmilesEdit(buttonname){
    var buttonnumber= buttonname.slice(7,-1);
	textfieldid = 'id_answer_' + buttonnumber;
	document.getElementById(textfieldid).value = jsmeApplet.smiles();
}

function  setJSMEoptions() {
    var options = document.getElementById("id_jmeoptions").value;
    jsmeApplet.options(options);
}

//this function will be called after the JavaScriptApplet code has been loaded.
function jsmeOnLoad() {
    jsmeApplet = new JSApplet.JSME("appletContainer", "380px", "340px", {
        //optional parameters
        "options" : document.getElementById("id_jmeoptions").value
    });
}

