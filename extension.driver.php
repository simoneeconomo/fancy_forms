<?php

	class extension_better_selectboxes extends Extension {

		public function about() {
			return array(
				'name'			=> 'Better Selectboxes',
				'version'		=> '1.0.1',
				'release-date'	=> '2011-01-07',
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
					'page' => '/administration/',
					'delegate' => 'AdminPagePreGenerate',
					'callback' => '__appendAssets'
				)
			);
		}

		public function __appendAssets($context) {
			$context['parent']->Page->addStylesheetToHead(URL . '/extensions/better_selectboxes/assets/symphony.selectbox.css', 'screen', 222);
			$context['parent']->Page->addStylesheetToHead(URL . '/extensions/better_selectboxes/assets/compatibility.css', 'screen', 222);
			$context['parent']->Page->addScriptToHead(URL . '/extensions/better_selectboxes/assets/symphony.selectbox.js', 222);
			$context['parent']->Page->addScriptToHead(URL . '/extensions/better_selectboxes/assets/init.js', 222);

		}
	}

?>
