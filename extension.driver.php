<?php

	class extension_fancy_forms extends Extension {

		public function about() {
			return array(
				'name'			=> 'UI Experiment: Fancy Forms',
				'version'		=> '1.1.2beta',
				'release-date'	=> '2011-12-18',
				'author'		=> array(
					'name'			=> 'Simone Economo',
					'website'		=> 'http://www.lineheight.net/',
					'email'			=> 'my.ekoes@gmail.com'
				)
			);
		}

		public function getSubscribedDelegates() {
			return array(
				array(
					'page' => '/backend/',
					'delegate' => 'AdminPagePreGenerate',
					'callback' => 'appendAssets'
				)
			);
		}

		public function appendAssets($context) {
			$page = $context['parent']->Page;

			if ($page instanceof HTMLPage) {
				$page->addStylesheetToHead(URL . '/extensions/fancy_forms/assets/symphony.selectbox.css', 'screen', 222);
				$page->addStylesheetToHead(URL . '/extensions/fancy_forms/assets/symphony.textbox.css', 'screen', 222);
				$page->addStylesheetToHead(URL . '/extensions/fancy_forms/assets/symphony.checkbox.css', 'screen', 222);
				$page->addStylesheetToHead(URL . '/extensions/fancy_forms/assets/symphony.button.css', 'screen', 222);

				$page->addScriptToHead(URL . '/extensions/fancy_forms/assets/symphony.selectbox.js', 222);
				$page->addScriptToHead(URL . '/extensions/fancy_forms/assets/symphony.checkbox.js', 222);
				$page->addScriptToHead(URL . '/extensions/fancy_forms/assets/init.js', 222);
			}
		}
	}

?>
