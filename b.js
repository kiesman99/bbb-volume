function volumeWrapper(info, slider) {
    var div = document.createElement("div");
    div.classList.add("cvolume-wrapper");

    // add info and slider into wrapper
    div.appendChild(info);
    div.appendChild(slider);
    
    return div;
}

function volumeSlider(info) {
    var input = document.createElement("input");
    input.type = "range";
    input.min = "0";
    input.max = "100";
    input.classList.add("cvolume-slider");

    // Add some styling
    input.style.margin = "0 0 1px var(--md-padding-y)";

    // Initial Value
    input.value = document.getElementsByTagName("audio")[0].volume * 100;

    // trigger function
    input.oninput = function() {
        info.innerText = "Lautstärke: " + input.value + "%";
        document.getElementsByTagName("audio")[0].volume = input.value/100;
    }

    return input; 
}

function volumeInfo() {
    var info = document.createElement("p");
    info.classList.add("cvolume-info");

    // Add some styling
    info.style.padding = "0 var(--sm-padding-x)";
    info.style.color = "var(--color-gray)";
    info.style.textTransform = "uppercase";
    info.style.fontWeight = "600";
    info.style.fontSize = "0.85rem";

    // Initial Text
    info.innerText = "Lautstärke: " + document.getElementsByTagName("audio")[0].volume * 100 + "%";
    return info;
}

function inject() {
    new Promise((resolve) => setTimeout(resolve, 3 * 1000)).then(() => {
        console.log("Trying to inject...");
        var infoText = volumeInfo();
        var slider = volumeSlider(infoText);
        var div = volumeWrapper(infoText, slider);
        document.getElementsByClassName("content--2pnTsl")[0].prepend(div); 
        console.log("DONE INJECTING AUDIO CONTROLS");
    });
}

window.onload = function() {
    console.log("BEGIN INJECT AUDIO CONTROLS");
    if (document.getElementsByTagName("body") == null) {
        while (document.getElementsByTagName("body").length == undefined) {
            inject();    
        }
    } else {
        inject();
    }
}
