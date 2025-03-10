<?php
/**
 * Plugin version and other meta-data are defined here.
 *
 * @package     qtype_jme
 * @copyright   2025 Niko Hoogeveen <nikohoogeveen@gmail.com>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace qtype_jme\privacy;

use core_privacy\local\metadata\null_provider;

class provider implements null_provider
{

    /**
     * @inheritDoc
     */
    public static function get_reason(): string
    {
        return 'privacy:metadata';
    }
}