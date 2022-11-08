<?php
/**
 * Plugin Name: ClioWP Blocks Boilerplate
 * Plugin URI: https://github.com/pontikis/cliowp-blocks-boilerplate
 * Description: Free WordPress Gutenberg block-type Plugin Boilerplate for Developers
 * Version: 1.0.0
 * Author: Christos Pontikis
 * Author URI: https://pontikis.net
 * Text Domain: td-cliowp-blocks-boilerplate
 * Domain Path: /languages
 * Requires PHP: 5.6.20
 * Tested up to: 6.1
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
 *
 * @link https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/
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
	 *
	 * It is recommended to use block.json file after version 5.8
	 * However if you don't use it, register_block would be like
	 * the following register_block_without_block_json() function
	 */
	public function register_block() {
		register_block_type_from_metadata(
			__DIR__,
			array(
				'render_callback' => array( $this, 'render_callback' ),
			)
		);

		// i18n - PHP Localization.
		load_plugin_textdomain( 'td-cliowp-blocks-boilerplate', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

		// i18n - Load JSON files for JS.
		$script_handle = generate_block_asset_handle( 'cliowp-blocks-boilerplate', 'editorScript' );
		wp_set_script_translations( $script_handle, 'td-cliowp-blocks-boilerplate', plugin_dir_path( __FILE__ ) . 'languages' );
	}

	/**
	 * Register assets and block (without using block.json file)
	 * Unused fucntion - just for reference
	 */
	public function register_block_without_block_json() {

		wp_register_script( 'editor_js', plugin_dir_url( __FILE__ ) . 'build/editor.js', array( 'wp-blocks', 'wp-i18n', 'wp-editor' ), '1.0.0', true );
		wp_register_script( 'frontend_js', plugin_dir_url( __FILE__ ) . 'build/frontend.js', array( 'wp-i18n' ), '1.0.0', true );
		wp_register_style( 'editor_css', plugin_dir_url( __FILE__ ) . 'build/editor.css', array(), '1.0.0' );
		wp_register_style( 'frontend_css', plugin_dir_url( __FILE__ ) . 'build/frontend.css', array(), '1.0.0' );

		register_block_type(
			'cliowp-blocks/boilerplate',
			array(
				'render_callback' => array( $this, 'render_callback' ),
				'editor_script'   => 'editor_js',
				'editor_style'    => 'editor_css',
				'script'          => 'frontend_js',
				'style'           => 'frontend_css',
			)
		);

		// i18n - PHP Localization.
		load_plugin_textdomain( 'td-cliowp-blocks-boilerplate', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

		// i18n - Load JSON files for JS.
		wp_set_script_translations( 'editor_js', 'td-cliowp-blocks-boilerplate', plugin_dir_path( __FILE__ ) . 'languages' );
	}

	/**
	 * PHP render callback.
	 *
	 * @param array $attributes The attributes to pass to PHP.
	 */
	public function render_callback( $attributes ) {
		if ( isset( $attributes['headline'] ) && $attributes['headline'] ) {
			ob_start(); ?>
			<div class="cliowp-block-instance" data-blockprops="<?php echo base64_encode( wp_json_encode( $attributes ) ); ?>"></div>
			<?php
			return ob_get_clean();
		}

		return null;
	}

}

$cliowp_blocks_boilerplate = new ClioWP_Blocks_Boilerplate();
