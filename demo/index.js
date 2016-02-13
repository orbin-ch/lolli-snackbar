import $ from "jquery";
import Snackbar from "../src/index.js";

const snackbar = new Snackbar();

$("#show").on("click", () => {
  snackbar.show("Your draft has been discarded.", {
    action: () => {
      console.log("action");
    },
    actionText: "Action"
  });

  snackbar.show("This item already has the label \"travel\". You can add a new label.", {
    action: () => {
      console.log("action2");
    },
    actionText: "Action 2",
    timeout: 7000
  });

  snackbar.show("Changes saved.", {
    timeout: 2000
  });
});
