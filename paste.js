function volumeWrapper(e,n){var t=document.createElement("div");return t.classList.add("cvolume-wrapper"),t.appendChild(e),t.appendChild(n),t}function volumeSlider(e){var n=document.createElement("input");return n.type="range",n.min="0",n.max="100",n.classList.add("cvolume-slider"),n.style.margin="0 0 1px var(--md-padding-y)",n.value=100*document.getElementsByTagName("audio")[0].volume,n.oninput=function(){e.innerText="Lautstärke: "+n.value+"%",document.getElementsByTagName("audio")[0].volume=n.value/100},n}function volumeInfo(){var e=document.createElement("p");return e.classList.add("cvolume-info"),e.style.padding="0 var(--sm-padding-x)",e.style.color="var(--color-gray)",e.style.textTransform="uppercase",e.style.fontWeight="600",e.style.fontSize="0.85rem",e.innerText="Lautstärke: "+100*document.getElementsByTagName("audio")[0].volume+"%",e}function inject(){new Promise(e=>setTimeout(e,3e3)).then(()=>{console.log("Trying to inject...");var e=volumeInfo(),n=volumeWrapper(e,volumeSlider(e));document.getElementsByClassName("content--2pnTsl")[0].prepend(n),console.log("DONE INJECTING AUDIO CONTROLS")})}if(console.log("BEGIN INJECT AUDIO CONTROLS"),null==document.getElementsByTagName("body"))for(;null==document.getElementsByTagName("body").length;)inject();else inject();