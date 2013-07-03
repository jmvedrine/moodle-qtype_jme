M.qtype_jme={
    insert_jme_applet : function(Y, toreplaceid, appletid, name, topnode,
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
        this.show_java(toreplaceid, appletid, name, width, height, startingStructure, appletoptions);
            var inputdiv = Y.one(topnode);
            inputdiv.ancestor('form').on('submit', function (){
                Y.one(topnode+' input.answer').set('value', this.find_java_applet(name).smiles());
                Y.one(topnode+' input.jme').set('value', this.find_java_applet(name).jmeFile());
                Y.one(topnode+' input.mol').set('value', this.find_java_applet(name).molFile())
            }, this);
    },

    find_java_applet : function (appletname) {
        return document.JME1;
    },

    show_java : function (id, appletid, name, width, height, startingStructure, appletoptions) {
        var warningspan = document.getElementById(id);
        warningspan.innerHTML = '';
        document.JME1 = new JSApplet.JSME(id, width, height, {
        //optional parameters
            "options" : appletoptions,
     		"jme" : startingStructure,
        });
    }
}
