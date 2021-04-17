var A02_EventInspector;
(function (A02_EventInspector) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
    }
    function setInfoBox(_event) {
        var x = _event.pageX;
        var y = _event.pageY;
        var span = document.querySelector("span");
        var position = span;
        position.style.left = x + "px";
        position.style.top = y + "px";
        position.textContent = "x= " + x + "px , " + "y= " + y + "px";
    }
    function logInfo(_event) {
        console.log(_event);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.type);
    }
})(A02_EventInspector || (A02_EventInspector = {}));
//# sourceMappingURL=script.js.map