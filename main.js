const page = $(document.body);
const heading = $(".heading");
const container = $(".container");
const toggler = $(".toggler");
const info = $(".info");

heading.text("Dark Mode");
info.text("It's a dark night!");
toggler.css(
  "background",
  "linear-gradient(black, black 50%, white 50%, white)"
);

toggler.click(function () {
  // Toggle theme
  if (page.hasClass("light")) {
    page.removeClass("light");
    page.addClass("dark");
    heading.text("Dark Mode");
    info.text("It's a dark night!");
    toggler.css(
      "background",
      "linear-gradient(black, black 50%, white 50%, white)"
    );
  } else {
    page.removeClass("dark");
    page.addClass("light");
    heading.text("Light Mode");
    info.text("It's a bright day!");
    toggler.css(
      "background",
      "linear-gradient(white, white 50%, black 50%, black)"
    );
  }
});
