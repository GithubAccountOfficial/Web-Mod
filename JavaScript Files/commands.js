function help() {
    console.log("Go to  for More Info!");
};

function clear() {
    console.clear();
};

function send(text, style) {
    console.log(`%c${text}`, style);
};

function warn(text, style) {
    console.warn(`%c${text}`, style);
};

function error(text, style) {
    console.error(`%c${text}`, style);
};

function preventDefaultWebMod() {
    var data = JSON.parse(localStorage.getItem("WEB_MOD_DATA"));
    data.preventDefault = !data.preventDefault;
    localStorage.setItem("WEB_MOD_DATA", JSON.stringify(data));
};

function developerMode() {
    var data = JSON.parse(localStorage.getItem("WEB_MOD_DATA"));
    data.developerMode = !data.developerMode;
    localStorage.setItem("WEB_MOD_DATA", JSON.stringify(data));
};

function install(url) {
    var data = JSON.parse(localStorage.getItem("WEB_MOD_DATA"));
    if (data.developerMode) {
        var element = document.createElement("script");
        element.src = url;
        document.body.appendChild(element);
    } else {
        console.warn(`%cThis Tool is in BETA and is for Developers Only.`, "color: white;font-weight: 600;");
    };
};