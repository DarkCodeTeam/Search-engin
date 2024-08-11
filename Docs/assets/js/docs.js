$(document).ready(function() {
    // Boot OnePageNav
    $('#sidebar-menu').onePageNav({
        changeHash: false,
        currentClass: "active"
    });

    
    // Offcanvas menu
    $("body").on("click", "[data-action]", function(e) {
      e.preventDefault();

      var $this = $(this);
      var action = $this.data('action');
      var target = '';

      switch (action) {
        case "offcanvas-open":
        target = $this.data("target"), $(target).addClass("open"), $("body").append('<div class="body-backdrop" data-action="offcanvas-close" data-target=' + target + " />");
        $("body").addClass('offcanvas-open');
        break;
        case "offcanvas-close":
        target = $this.data("target"), $(target).removeClass("open"), $("body").find(".body-backdrop").remove();
        $("body").removeClass('offcanvas-open');
        break;

        case 'aside-open':
        target = $this.data('target');
        $this.data('action', 'aside-close');
        $this.addClass('toggled');
        $(target).addClass('toggled');
        $('.content').append('<div class="body-backdrop" data-action="aside-close" data-target='+target+' />');
        break;


        case 'aside-close':
        target = $this.data('target');
        $this.data('action', 'aside-open');
        $('[data-action="aside-open"], '+target).removeClass('toggled');
        $('.content, .header').find('.body-backdrop').remove();
        break;
      }
    });

});

hljs.initHighlightingOnLoad();
