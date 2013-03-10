

  Moodle 2.2 plugin: "JME" (Java Molecular Editor) question type

  JME (c) Novartis AG - courtesy of Peter Ertl, Novartis

  Moodle integration script written by Dan Stowell

IMPORTANT:

JME is a freely-available molecule editor tool, but it is not open-source. 
We have obtained permission from the author of the tool (Peter Ertl, 
permission granted 2006-03-31 and 2011-01-17) to distribute it as a 
Moodle plugin, but if you wish to do anything different with JME,
you will need to obtain permission first. For more information see 
http://www.molinspiration.com/jme/doc/index.html

The PHP scripts which accompany the editor are open-source under the 
GNU Public Licence (GPL) - the same licence as Moodle. The file 
"JME.jar" is NOT open-source.


INSTALLATION:

This will NOT work with Moodle 2.0 or older, since it uses the new
question API implemented in Moodle 2.1. Other versions for Moodle 1.9
and Moodle 2.0 are also availables separately.

This is a Moodle question type. It should come as a self-contained 
"jme" folder which should be placed inside the "question/type" folder
which already exists on your Moodle web server.

Once you have done that, as for any other Moodle plugin, visit your
Moodle Administration Notifications page and click on "Upgrade Moodle
database now" button, the JME question type plugin will be installed.


USAGE:

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
