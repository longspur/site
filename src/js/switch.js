function changeStyle(style) {
    if (style == null)
        style = localStorage.getItem("style");
        if (style == null) 
            style = "style";
    document.querySelector("link[id='switch']").setAttribute("href", "/css/" + style + ".css");
    localStorage.setItem("style", style);
}

changeStyle();

