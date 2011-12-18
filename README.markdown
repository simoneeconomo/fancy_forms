## FAQ: Frequently asked questions

> Your extension conflicts with <any_other_extension>. What am I supposed to do?

You can populate the [`ignore` array](https://github.com/eKoeS/fancy_forms/blob/master/assets/symphony.selectbox.js#L7) with as many CSS selectors as you want. Fancy Forms won’t replace any element whose parents match the given selector.

> Can this extension be used on frontend too?

Sure, all it does is providing some jQuery plugins and stylesheets. Here’s the list of resources you need to include in your pages:

    symphony.button.css
    symphony.checkbox.css
    symphony.checkbox.js
    symphony.selectbox.css
    symphony.selectbox.js
    symphony.textbox.css

While buttons textinputs and textareas only need some custom CSS rules, selectboxes and checkboxes are initialised as ordinary jQuery plugins.

Example:

    $('input[type="checkbox"]').symphonyCheckbox();
    $('select').symphonySelectbox();

## Installation & Updating

Information about [installing and updating extensions](http://symphony-cms.com/learn/tasks/view/install-an-extension/) can be found in the Symphony documentation at <http://symphony-cms.com/learn/>.
