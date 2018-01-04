/*global document, hljs */

(function (global) {
    "use strict";

    global.onload = function () {
        var h, s;

        h = document.getElementsByTagName("html")[0];
        h = h.innerHTML.replace(/</g, "&lt;");
        h = h.replace(/[ \n]*\n+/g, "\n");
        h = h.replace(/ /g, "&nbsp;");
        h = h.replace(/\n/g, "<br />");
        h = h.replace(/&lt;\/body/g, "&nbsp;&nbsp;&lt;/body"); // ?

        s = document.getElementById("background");
        s.innerHTML = "&lt;!DOCTYPE html><br />&lt;html><br />" +
                " &nbsp;&nbsp;" + h + "<br />&lt;/html>";
        hljs.highlightBlock(s);
    };

}(this));
