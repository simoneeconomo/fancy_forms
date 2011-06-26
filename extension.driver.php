<?php

	class extension_better_forms extends Extension {

		public function about() {
			return array(
				'name'			=> 'Better Forms',
				'version'		=> '1.1.0 Beta',
				'release-date'	=> '2011-02-08',
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
				$page->addStylesheetToHead(URL . '/extensions/better_forms/assets/symphony.selectbox.css', 'screen', 222);
				$page->addStylesheetToHead(URL . '/extensions/better_forms/assets/symphony.textbox.css', 'screen', 222);
				$page->addStylesheetToHead(URL . '/extensions/better_forms/assets/symphony.checkbox.css', 'screen', 222);
				$page->addStylesheetToHead(URL . '/extensions/better_forms/assets/symphony.button.css', 'screen', 222);

				$page->addScriptToHead(URL . '/extensions/better_forms/assets/symphony.selectbox.js', 222);
				$page->addScriptToHead(URL . '/extensions/better_forms/assets/symphony.checkbox.js', 222);
				$page->addScriptToHead(URL . '/extensions/better_forms/assets/init.js', 222);
			}
		}
	}

?>
