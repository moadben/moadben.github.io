window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#PHP', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut'
    });

     var circle_2 = new ProgressBar.Circle('#C', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut'
    });

      var circle_3 = new ProgressBar.Circle('#Java', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut'
    });

      var circle_4 = new ProgressBar.Circle('#Python', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut'
    });

       var circle_5 = new ProgressBar.Circle('#HTML', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut'
    });

        var circle_6 = new ProgressBar.Circle('#CSS', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut'
    });

    function animate(){
        circle.animate(1);
        circle_2.animate(1);
        circle_3.animate(1);
        circle_4.animate(1);
        circle_5.animate(1);
        circle_6.animate(1);
    }

function isElementInViewport(){
     var scrollTop = $(window).scrollTop();
     var viewportHeight = $(window).height();
     $("#PHP:in-viewport").each(function(){
        var top = $(this).offset().top;
            if(scrollTop + viewportHeight >= top ){
                animate();
            }
    });
};


$(window).scroll(isElementInViewport);

};
