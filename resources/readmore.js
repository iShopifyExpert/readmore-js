/*
 * Read More Plugin
 *  by Reece Como
 *  9 Jan 2018
 *
 * Expanded from: "Text Fade Out / Read More Link | CSS-Tricks"
 * https://css-tricks.com/text-fade-read-more/
 */
$(document).ready(function() {

    $(".read-more .button").each(function() {
        // Get objects
        var thisButton = $(this);
        var $prompt = thisButton.parent();
        var $container = $prompt.parent();

        // Get the height of the container
        var totalHeight = $container[0].scrollHeight;

        if(totalHeight < 150) {
            // Too small initially
            $container.css('max-height', 'none');
            $prompt.hide();
        }

        thisButton.on('click', function() {
            // Set height to prevent instant jump-down when max height is removed
            $container.css({ "height": $container.height(), "max-height": 9999 }).animate({ "height": totalHeight });

            $prompt.fadeOut(); // fade out read-more prompt

            return false; // prevent jump-down
        });
    });

});
