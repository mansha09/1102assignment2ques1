
  $(document).ready(function() {
    // Draggable
    $("#draggable").draggable();

    // Droppable
    $("#droppable").droppable({
      drop: function(event, ui) {
        $(this)
          .addClass("ui-state-highlight")
          .find("p")
          .html("Dropped!");
      }
    });

    // Resizable
    $(".resizable-element").resizable();

    // Selectable
    $(".selectable-element").selectable();

    // Accordion
    $("#accordion").accordion();

    // Autocomplete
    var availableTags = ["div", "p", "a", "img", "ul", "ol", "li", "input", "button", "form", "paragraph", "anchor", "image", "unordered list", "ordered list", "list item", "input field", "button", "form"];
    $("#autocomplete").autocomplete({
      source: availableTags
    });

    // Datepicker
    $("#datepicker").datepicker();

    // Slider
    $("#slider").slider({
      min: 10,
      max: 30,
      slide: function(event, ui) {
        $("#text-container p").css("font-size", ui.value + "px");
      }
    });

    // Effects
    // Show & Hide
    $("#showHideBtn").click(function() {
      $("#showHideElement").toggle("blind", 500);
    });

    // Explode
    $("#explodeBtn").click(function() {
      $("#explodeElement").effect("explode", { pieces: 16 }, 1000);
    });

    // Fade-in & Fade-out
    $("#fadeInOutBtn").click(function() {
      $("#fadeInOutElement").fadeToggle(1000);
    });

    // Color Animation
    $("#colorAnimationBtn").click(function() {
      $("#colorAnimationElement").animate({
        backgroundColor: "red",
        color: "white"
      }, 1000).delay(500).animate({
        backgroundColor: "lightblue",
        color: "black"
      }, 1000);
    });
  });
