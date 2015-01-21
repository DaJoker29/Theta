/*  

    Fixes navigation links with borders.
    Hovering over the link now changes
    the color of the border as well.

    Lights them up like a Christmas tree!

*/

function christmas(obj, state, parent) {
    /* Defaults */
    obj = obj || 'a';
    state = state || 'light';
    parent = parent || null;

    if(parent) {
        /* Set selector*/
        var selector = parent + ' ' + obj;
        $(selector).hover(
            function() {
                $(this).closest(parent).addClass(state);
            },
            function() {
                $(this).closest(parent).removeClass(state);
            }
        ); 
    }

    else {
        $(obj).hover(
            function() {
                $(this).addClass(state);
            },
            function() {
                $(this).removeClass(state);
            }
        );
    }
}

/*
    On Ready, where most of the code belongs
*/

$(document).ready(function() {
    /*  Change borders on navigation links  */
    christmas(null, 'hover', '.nav-link');
    christmas('.site-title');
    christmas(null, null, '.pagination');
});
