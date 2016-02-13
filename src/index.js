import $ from "jquery";

const defaults = {
  timeout: 3000,
  action: function() {}
};

export default class Snackbar {
  constructor() {
    this.queue = [];

    this.$element = $("<div />")
      .addClass("snackbar snackbar-closed")
      .appendTo("body");
  }

  show(text, options) {
    options = $.extend({}, defaults, options);
    options.text = text;

    this.queue.push(options);

    this.next();
  }

  next() {
    if (this.isOpen || this.isOpening || this.queue.length === 0) return;

    this.isOpening = true;

    const item = this.queue.shift();

    $("<span />")
      .addClass("snackbar-message")
      .text(item.text)
      .appendTo(this.$element);

    if (item.action && item.actionText) {
      $("<span class='snackbar-action'/>")
        .text(item.actionText)
        .on("click", item.action.bind(this))
        .appendTo(this.$element);
    }

    this.$element.one("transitionend", () => {
      this.isOpening = false;
      this.isOpen = true;

      $(document).one("click", $.proxy(this.dismiss, this));

      if (item.timeout) {
        this.timeout = setTimeout(() => {
          this.dismiss();
        }, item.timeout);
      }
    });

    this.$element.removeClass("snackbar-closed");
  }

  dismiss() {
    if (this.isOpening) return;

    $(document).off("click", $.proxy(this.dismiss, this));

    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }

    this.$element.one("transitionend", () => {
      this.isOpen = false;

      this.$element.empty();
      this.next();
    });

    this.$element.addClass("snackbar-closed");
  }
}
