M.qtype_jme={
    insert_jme_applet : function(Y, toreplaceid, appletname, topnode,
             width, height, feedback, readonly, appletoptions){
        var startingStructure = Y.one(topnode+' input.jme').get('value');
        var jmeoptions = new Array();

        if (appletoptions) {
            jmeoptions[jmeoptions.length] = appletoptions;
        }
        if (readonly) {
            jmeoptions[jmeoptions.length] = "depict";
        }
        if (jmeoptions.length !== 0) {
            appletoptions = jmeoptions.join(',');
        }
        this.show_java(toreplaceid, appletname, width, height, startingStructure, appletoptions);
            var inputdiv = Y.one(topnode);
            inputdiv.ancestor('form').on('submit', function (){
                Y.one(topnode+' input.answer').set('value', document.JME[appletname].smiles());
                Y.one(topnode+' input.jme').set('value', document.JME[appletname].jmeFile());
                Y.one(topnode+' input.mol').set('value', document.JME[appletname].molFile())
            }, this);
    },

    show_java : function (id, appletname, width, height, startingStructure, appletoptions) {
        var warningspan = document.getElementById(id);
        warningspan.innerHTML = '';
        if (!document.JME) {
            document.JME = new Object();
        }
        document.JME[appletname] = new JSApplet.JSME(id, width, height, {
        //optional parameters
            "options" : appletoptions,
     		"jme" : startingStructure
        });
    }
}
