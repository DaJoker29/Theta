/*  
    Fixes navigation links with borders.
    Hovering over the link now changes
    the color of the border as well.
    Light them up like a Christmas tree!
*/

function christmas(obj, state, parent) {
    /* Defaults */
    obj = obj || 'a';
    state = state || 'light';
    parent = parent || null;

    if(parent) {
        /* Set selector*/
        var selector = parent + ' ' + obj;
        jQuery(selector).hover(
            function() {
                jQuery(this).closest(parent).addClass(state);
            },
            function() {
                jQuery(this).closest(parent).removeClass(state);
            }
        ); 
    }

    else {
        jQuery(obj).hover(
            function() {
                jQuery(this).addClass(state);
            },
            function() {
                jQuery(this).removeClass(state);
            }
        );
    }
}


/*
    Load it up
*/
jQuery(document).ready(function() {
    /*  Change borders on navigation links  */
    christmas(null, 'hover', '.nav-link');
    christmas('.site-title');
});
