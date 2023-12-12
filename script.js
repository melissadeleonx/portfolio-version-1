// Button scroll effect
$(document).ready(function () {
    var buttons = $('.btn-scroll');

    $(window).scroll(function () {
        buttons.each(function () {
            var targetSection = $(this).attr('href');
            var targetOffset = $(targetSection).offset();

            if (targetOffset && targetOffset.hasOwnProperty('top')) {
                targetOffset = targetOffset.top;
                var scrollPosition = $(window).scrollTop();

                if (scrollPosition >= targetOffset - 100 && scrollPosition < targetOffset + 400) {
                    console.log("Triggering click on:", this);
                    $(this).click();
                }
            } else {
                console.error("Could not find target section:", targetSection);
            }
        });
    });
});
