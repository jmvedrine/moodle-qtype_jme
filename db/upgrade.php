<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * JME question type upgrade code.
 *
 * @package    qtype_jme
 * @copyright  2013 Jean-Michel Vedrine
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */


defined('MOODLE_INTERNAL') || die();


/**
 * Upgrade code for the jme question type.
 * @param int $oldversion the version we are upgrading from.
 */
function xmldb_qtype_jme_upgrade($oldversion) {
    global $CFG, $DB;

    $dbman = $DB->get_manager();

    // Moodle v2.4.0 release upgrade line
    // Put any upgrade step following this.

    if ($oldversion < 2013011800) {

        // Define table question_jme to be dropped from question_jme.
        $table = new xmldb_table('question_jme');

        // Conditionally launch drop field answers.
        if ($dbman->table_exists($table)) {
            $dbman->drop_table($table);
        }

        // Shortanswer savepoint reached.
        upgrade_plugin_savepoint(true, 2013011800, 'qtype', 'jme');
    }

    return true;
}
