var lastVolume = document.getElementsByTagName("audio")[0].volume;

function volumeWrapper(info, slider, muteButton) {
    var div = document.createElement("div");
    div.classList.add("cvolume-wrapper");

    // add info and slider into wrapper
    div.appendChild(info);
    div.appendChild(slider);
    div.appendChild(muteButton);
    
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
        lastVolume = input.value;
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

function muteButton(slider, infoText) {
    var button = document.createElement("button");
    button.innerText = "Mute";
    
    button.onclick = function() {
       if (slider.value > 0) {
            lastVolume = slider.value / 100;
            document.getElementsByTagName("audio")[0].volume = 0.0;
            slider.value = 0.0;
            infoText.innerText = "Lautstärke: " + slider.value + "%";
            button.innerText = "Unmute";
       } else {
            slider.value = lastVolume * 100; 
            document.getElementsByTagName("audio")[0].volume = lastVolume;
            infoText.innerText = "Lautstärke: " + slider.value + "%";
            button.innerText = "Mute";
       } 
    }

    return button;
}

function inject() {
    new Promise((resolve) => setTimeout(resolve, 3 * 1000)).then(() => {
        console.log("Trying to inject...");
        var infoText = volumeInfo();
        var slider = volumeSlider(infoText);
        var mButton = muteButton(slider, infoText);
        var div = volumeWrapper(infoText, slider, mButton);
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
