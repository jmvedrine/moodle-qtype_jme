

  Moodle question type addon: "JME" (Java Molecular Editor)

  JME (c) Novartis AG - courtesy of Peter Ertl, Novartis

  Original Moodle question type written by Dan Stowell

###IMPORTANT:
The jme Moodle question type uses a java applet, the JMEMolecularEditor©.
JMEMolecularEditor© is a freely-available molecule editor tool, but it is not open-source.
We have obtained permission from the author of the tool (Peter Ertl,
permission granted 2006-03-31 and 2011-01-17, to distribute it as a
Moodle addon, but if you wish to do anything different with JME,
you will need to obtain permission first. For more information see
http://www.molinspiration.com/jme/doc/index.html.

If you downloaded this addon from a git repository, the JME.jar file necessary
for it to work is NOT INCLUDED. So you must get a copy of this Java archive from
Peter Ertl (see http://www.molinspiration.com/jme/getjme.html) to be able to use this plugin.
Put a copy of the JME.jar file in the question/type/jme/jme/ subfolder.

The jme Moodle addon is open-source under the
GNU Public Licence (GPL), the same licence as Moodle. Please note again that
the file "JME.jar" is NOT open-source.


##INSTALLATION:
###Requires
This version works with Moodle 2.3 and 2.4. Other versions for older
Moodle versions are also availables separately.
A version upgraded for Moodle 2.5 is also available.

###Installation Using Git

To install using git, type this command in the root of your Moodle install:

    git clone -b MOODLE_23_STABLE git://github.com/jmvedrine/moodle-qtype_jme.git question/type/jme
    echo '/question/type/jme' >> .git/info/exclude

###Installation From Downloaded zip file

Alternatively, download the zip from :
  https://github.com/jmvedrine/moodle-qtype_jme/archive/MOODLE_23_STABLE.zip

unzip it into the question/type folder, and then rename the new folder to jme.

###Plugin Initialisation
Once you have installed the files on your server, as for any other Moodle plugin,
visit your Moodle Administration Notifications page and click on "Upgrade Moodle
database now" button, the JME question type plugin will be installed.

###IMPORTANT WARNING
Don't forget that this plugin will not work if there is no JME.jar file in the
question/type/jme/jme/ subfolder ! go to http://www.molinspiration.com/jme/getjme.html
to get a copy of this file.

##USAGE:

The JME editor can be used to design molecular structures, so you
can ask questions such as "Please draw the structure of
2,3-dichloro-but-2-ene". In order to mark responses, they need to
be converted to a simple text format called SMILES (see
http://www.daylight.com/smiles/ for more information).

So, the student must design the molecule, using the JME Java Applet.
The content of the student response is automatically saved when the
student change page in the quiz either by pressing on the "Next"
button, or using the quiz navigation panel. When quiz attempt is
submitted, this response is then marked in the same way as a
(case-sensitive) short-answer question.

You can use a similar process when designing the question. Using
the JME applet, design a molecule that is a possible (right or
wrong) answer and then press a button next to the answer boxes
to store the current design as a SMILES code.
