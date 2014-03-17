var cssProperties, data, form, key, result, runTests, supported, testSet, value, _i, _j, _len, _len1;

testSet = {
  "background-attachment": ["scroll", "fixed", "local"],
  "background-clip": ["border-box", "padding-box", "content-box"],
  "background-color": ["transparent", "inherit"],
  "background-image": [],
  "background-origin": ["padding-box", "border-box", "content-box"],
  "background-position": [],
  "background-repeat": ["repeat", "no-repeat", "repeat-x", "repeat-y", "round", "space"],
  "background-size": ["auto", "contain", "cover"],
  "border-bottom-color": ["transparent", "inherit", "currentColor"],
  "border-bottom-left-radius": [],
  "border-bottom-right-radius": [],
  "border-bottom-style": ["dashed", "outset", "solid", "double", "none", "groove", "hidden", "ridge", "dotted", "inset"],
  "border-bottom-width": [],
  "border-collapse": ["separate", "collapse", "inherit"],
  "border-left-color": ["transparent", "inherit", "currentColor"],
  "border-left-style": ["dashed", "outset", "solid", "double", "none", "groove", "hidden", "ridge", "dotted", "inset"],
  "border-left-width": [],
  "border-right-color": ["transparent", "inherit", "currentColor"],
  "border-right-style": ["dashed", "outset", "solid", "double", "none", "groove", "hidden", "ridge", "dotted", "inset"],
  "border-right-width": [],
  "border-top-color": ["transparent", "inherit", "currentColor"],
  "border-top-left-radius": [],
  "border-top-right-radius": [],
  "border-top-style": ["dashed", "outset", "solid", "double", "none", "groove", "hidden", "ridge", "dotted", "inset"],
  "border-top-width": [],
  "bottom": [],
  "caption-side": ["inherit", "top", "bottom"],
  "clear": ["both", "inherit", "none", "left", "right"],
  "clip": [],
  "color": [],
  "cursor": [],
  "direction": [],
  "display": ["inline-flex", "block", "grid", "list-item", "inline-grid", "inline-list-item", "none", "inline-block", "inherit", "flex", "inline", "box", "flex-box", "table", "inline-table", "table-row-group", "table-column", "table-column-group", "table-header-group", "table-footer-group", "table-row"],
  "empty-cells": ["hide", "show"],
  "float": ["none", "left", "right"],
  "font-family": [],
  "font-size": [],
  "font-style": [],
  "font-variant": [],
  "font-weight": [],
  "height": [],
  "left": [],
  "letter-spacing": [],
  "line-height": [],
  "list-style-image": [],
  "list-style-position": [],
  "list-style-type": [],
  "margin-bottom": [],
  "margin-left": [],
  "margin-right": [],
  "margin-top": [],
  "max-height": [],
  "max-width": [],
  "min-height": [],
  "min-width": [],
  "opacity": [],
  "orphans": [],
  "outline-color": [],
  "outline-style": ["solid", "inherit", "double", "auto", "groove", "none", "ridge", "dotted", "inset", "dashed", "outset"],
  "outline-width": [],
  "overflow-x": [],
  "overflow-y": [],
  "padding-bottom": [],
  "padding-left": [],
  "padding-right": [],
  "padding-top": [],
  "page-break-after": ["empty string", "left", "right", "auto", "inherit", "always", "avoid"],
  "page-break-before": ["empty string", "auto", "inherit", "always", "avoid", "left"],
  "page-break-inside": [],
  "pointer-events": ["visiblePainted", "stroke", "visibleFill", "visibleStroke", "auto", "visible", "none", "painted", "all", "fill"],
  "position": [],
  "resize": [],
  "right": [],
  "table-layout": ["auto", "fixed", "inherit"],
  "text-align": ["start", "end", "left", "right", "justify", "match-pattern"],
  "text-decoration": ["line-through", "blink", "none", "underline", "overline"],
  "text-indent": [],
  "text-overflow": ["clip", "ellipsis", "ellipsis-word"],
  "text-rendering": [],
  "text-shadow": [],
  "text-transform": [],
  "top": [],
  "unicode-bidi": ["normal", "embed", "bidi-override"],
  "vertical-align": [],
  "visibility": [],
  "-webkit-animation-delay": [],
  "-webkit-animation-direction": ["alternate", "alternate-reverse", "normal", "reverse"],
  "-webkit-animation-duration": [],
  "-webkit-animation-iteration-count": [],
  "-webkit-animation-name": [],
  "-webkit-animation-play-state": [],
  "-webkit-animation-timing-function": ["step-end", "ease-out", "ease-in-out", "ease", "linear", "step-start", "ease-in"],
  "-webkit-appearance": ["button-focus", "checkbox-container", "carret", "button-arrow-down", "checkbox-small", "none", "button-arrow-next", "dialog", "button", "button-arrow-previous", "listbox", "button-bevel", "button-arrow-up", "checkbox"],
  "-webkit-backface-visibility": ["hidden", "visible"],
  "-webkit-background-clip": ["border-box", "padding-box", "content-box"],
  "-webkit-background-composite": [],
  "-webkit-background-origin": ["padding-box", "border-box", "content-box"],
  "-webkit-background-size": [],
  "-webkit-border-fit": [],
  "-webkit-border-horizontal-spacing": [],
  "-webkit-border-image": [],
  "-webkit-border-vertical-spacing": [],
  "-webkit-box-align": [],
  "-webkit-box-direction": ["normal", "reverse", "inherit"],
  "-webkit-box-flex": ['1'],
  "-webkit-box-flex-group": [],
  "-webkit-box-lines": ["single", "multiple"],
  "-webkit-box-ordinal-group": [],
  "-webkit-box-orient": ["block-axis", "inherit", "horizontal", "vertical", "inline-axis"],
  "-webkit-box-pack": ["start", "end", "center", "justify"],
  "-webkit-box-reflect": [],
  "-webkit-box-shadow": [],
  "-webkit-box-sizing": ["padding-box", "border-box", "content-box"],
  "-webkit-color-correction": [],
  "-webkit-column-break-after": ["region", "right", "avoid-region", "page", "auto", "column", "always", "avoid-page", "avoid", "avoid-column", "left"],
  "-webkit-column-break-before": ["auto", "column", "always", "avoid-page", "avoid", "avoid-column", "left", "region", "right", "avoid-region", "page"],
  "-webkit-column-break-inside": ["auto", "avoid", "avoid-page", "avoid-column", "avoid-region"],
  "-webkit-column-count": ["2", "auto"],
  "-webkit-column-gap": ["normal", "2px"],
  "-webkit-column-rule-color": [],
  "-webkit-column-rule-style": ["outset", "solid", "hidden", "double", "groove", "none", "ridge", "dotted", "inset", "dashed"],
  "-webkit-column-rule-width": [],
  "-webkit-column-width": [],
  "-webkit-font-smoothing": [],
  "-webkit-highlight": [],
  "-webkit-line-break": ["normal", "strict"],
  "-webkit-line-clamp": [],
  "-webkit-margin-bottom-collapse": [],
  "-webkit-margin-top-collapse": [],
  "-webkit-marquee-direction": ["reverse", "forward"],
  "-webkit-marquee-increment": [],
  "-webkit-marquee-repetition": [],
  "-webkit-marquee-style": ["slide", "alternate", "scroll"],
  "-webkit-mask-attachment": [],
  "-webkit-mask-box-image": [],
  "-webkit-mask-clip": ["no-clip", "border-box", "padding-box", "content-box"],
  "-webkit-mask-composite": [],
  "-webkit-mask-image": [],
  "-webkit-mask-origin": [],
  "-webkit-mask-position": [],
  "-webkit-mask-repeat": [],
  "-webkit-mask-size": [],
  "-webkit-nbsp-mode": [],
  "-webkit-perspective": ["none", "2"],
  "-webkit-perspective-origin": ["right", "top", "bottom", "center", "left"],
  "-webkit-rtl-ordering": [],
  "-webkit-tap-highlight-color": [],
  "-webkit-text-decorations-in-effect": [],
  "-webkit-text-fill-color": [],
  "-webkit-text-security": [],
  "-webkit-text-stroke-color": [],
  "-webkit-text-stroke-width": [],
  "-webkit-transform": [],
  "-webkit-transform-origin": [],
  "-webkit-transform-style": [],
  "-webkit-transition-delay": [],
  "-webkit-transition-duration": [],
  "-webkit-transition-property": [],
  "-webkit-transition-timing-function": [],
  "-webkit-user-drag": [],
  "-webkit-user-modify": [],
  "-webkit-user-select": ["element", "none", "text", "all"],
  "white-space": ["pre", "pre-line", "pre-wrap", "normal", "nowrap"],
  "widows": ["inherit", "2px"],
  "width": [],
  "word-break": ["normal", "break-all", "keep-all"],
  "word-spacing": [],
  "word-wrap": ["normal", "break-word"],
  "z-index": [],
  "zoom": []
};

cssProperties = window.getComputedStyle(document.body);

runTests = function(name, values) {
  var results, value, _i, _len;
  if (values == null) {
    values = [];
  }
  results = [];
  for (_i = 0, _len = values.length; _i < _len; _i++) {
    value = values[_i];
    document.body.style[name] = value;
    if (document.body.style[name] === value) {
      results.push(value);
    } else {
      value = "-webkit-" + value;
      document.body.style[name] = value;
      if (document.body.style[name] === value) {
        results.push(value);
      }
    }
  }
  return results;
};

result = "";

for (_i = 0, _len = cssProperties.length; _i < _len; _i++) {
  key = cssProperties[_i];
  result += "* " + key + "\n";
  if (testSet[key]) {
    supported = runTests(key, testSet[key]);
    if (supported.length) {
      for (_j = 0, _len1 = supported.length; _j < _len1; _j++) {
        value = supported[_j];
        result += "    * " + value + "\n";
      }
    }
  }
}

form = document.getElementById("main-form");

data = document.getElementById("form-data");

data.value = result;
