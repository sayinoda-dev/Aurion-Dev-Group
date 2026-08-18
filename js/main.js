/**
 * Main entry point — initializes all modules.
 */
(function () {
  "use strict";

  function init() {
    Render.all();
    Navigation.init();
    Animations.init();
    Contact.init();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
