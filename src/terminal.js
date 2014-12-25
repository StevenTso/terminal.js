/**
 * terminal.js
 * Copyright © 2014 Steven Tso
 */
define(function(require) {

	'use strict';

	var domready = require('vendor/domready');

	/**
	 * Helper that creates a terminal with a default display and shell.
	 *
	 * @param {String|Element} DOM element or selector where display will be rendered
	 * @param {Object} displaySettings Optional display parameters
	 * @constructor
	 */
	var terminal = function(element, displaySettings) {
		var self = this;

		// Setup shell
		this.shell = displaySettings.shell || (new terminal.Shell());
		if(!this.shell || !(this.shell instanceof terminal.Shell)) {
			console.error('terminal.constructor: Provided shell not valid');
			return;
		}
		displaySettings.shell = this.shell;

		// Setup display
		domready(function(){
			element = (typeof element === 'string') ?
				document.querySelector(element) :
				element;

			self.display = new terminal.Display(element, displaySettings);
		});
	};

	terminal.prototype = {
		/**
		 * @property {terminal.Shell} shell
		 * @readonly
		 */
		set shell(value) {
			if(!this._shell)
				this._shell = value;
		},

		get shell() {
			return this._shell;
		},

		/**
		 * @property {terminal.Display} display
		 * @readonly
		 */
		set display(value) {
			if(!this._display)
				this._display = value;
		},

		get display() {
			return this._display;
		}
	};

	terminal.version = '0.1';

	terminal.Display = require('ui/display');
	terminal.Shell = require('system/shell');
	terminal.Process = require('system/process');

	return terminal;
});
