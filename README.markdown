This extension comes from the need of having fully customizable form controls that better support the user on one hand and are more aesthetically pleasing on the other.

## Features

 * Two homemade jQuery plugins, `symphonySelectbox` and `symphonyCheckbox`, to respectively replace `select` and `input type"checkbox"` elements with more advanced UI controls.
 * Consistent styles using recent standards (i.e. CSS3) for text inputs, textareas and buttons.
 * Replacements for both multiple- and single-choice selectboxes, with two available sizes: "_tiny_" and "_normal_".

Future releases will provide:

 * Custom event handlers
 * Better performance
 * Future fixes to future bugs ;)

## FAQ: Frequently asked questions

> Q: This (awesome) extension causes conflicts with <any_other_extension>. What am I supposed to do?

A: You can populate the [`ignore` array](https://github.com/eKoeS/fancy_forms/blob/master/assets/symphony.selectbox.js#L7) (available in both `symphonySelectbox` and `symphonyCheckbox`) with a complex CSS selector. Upon initialization, Fancy Forms [will skip](https://github.com/eKoeS/fancy_forms/blob/master/assets/symphony.selectbox.js#L134) any element whose parents match the given expression.

> Q: Can this (marvellous) extension be used on frontend too?

A: Sure, all it does is providing some jQuery plugins and stylesheets. Here’s the list of resources you need to include in your pages:

    symphony.button.css
    symphony.checkbox.css
    symphony.checkbox.js
    symphony.selectbox.css
    symphony.selectbox.js
    symphony.textbox.css

While buttons and textareas (as well as textinputs) are completely handled by CSS, selectboxes and checkboxes must be initialised as ordinary jQuery plugins. Example:

    $('input[type="checkbox"]').symphonyCheckbox();
    $('select').symphonySelectbox();

## Installation & Updating

Information about [installing and updating extensions](http://symphony-cms.com/learn/tasks/view/install-an-extension/) can be found in the Symphony documentation at <http://symphony-cms.com/learn/>.
