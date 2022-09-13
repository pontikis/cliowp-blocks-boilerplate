<?php
/**
 * Plugin Name: ClioWP Blocks Boilerplate
 * Plugin URI: https://github.com/pontikis/cliowp-blocks-boilerplate
 * Description: Free WordPress Gutenberg block-type Plugin Boilerplate for Developers
 * Version: 1.0.0
 * Author: Christos Pontikis
 * Author URI: https://pontikis.net
 * Text Domain: cliowp-hello-gutenberg
 * Domain Path: /languages
 * Requires PHP: 5.6.20
 * Tested up to: 6.0.2
 * License: GPLv2 or later
 *
 * @package ClioWP_Blocks_Boilerplate
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * ClioWP_Blocks_Boilerplate plugin main class
 */
class ClioWP_Blocks_Boilerplate {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_block' ) );
	}

	/**
	 * Register assets and block
	 */
	public function register_block() {
		wp_register_script( 'blocks_boilerplate_js', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-blocks', 'wp-i18n', 'wp-editor' ), '1.0.0', true );
		wp_register_style( 'blocks_boilerplate_css', plugin_dir_url( __FILE__ ) . 'build/index.css', array(), '1.0.0' );

		register_block_type(
			'cliowp-blocks/boilerplate',
			array(
				'render_callback' => array( $this, 'render_callback' ),
				'editor_script'   => 'blocks_boilerplate_js',
				'editor_style'    => 'blocks_boilerplate_css',
			)
		);
	}

	/**
	 * PHP render callback.
	 *
	 * @param array $attributes The attributes to pass to PHP.
	 */
	public function render_callback( $attributes ) {
		return '<p>Hello Gutenberg!</p>';
	}

}

$cliowp_blocks_boilerplate = new ClioWP_Blocks_Boilerplate();
