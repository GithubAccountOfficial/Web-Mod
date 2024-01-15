// Main Variables
const WebMod = {
    version: "1.0.0 LATEST",
    scripts: ["JavaScript Files/commands.js"],
    local_storage_data: {
        "preventDefault": false,
        "developerMode": false,
    },
    main_message() {
        console.log(`%cWeb Mod v${WebMod.version}`, "margin-bottom: 10px;font-family: Arial;font-size: 40px;font-weight:600;background:linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");
        console.log(`%cDeveloper Tools But Better. Get the Full Documentation by "help()" all lowercase.`, "color: white;font-weight: 600;");
    },
    load_scripts() {
        for (let amount = 1; amount <= WebMod.scripts.length; amount++) {
            let script_element = document.createElement("script");
            script_element.src = WebMod.scripts[amount - 1];
            document.body.appendChild(script_element);
        };
    },
};

// Start Up
console.log("%cLoading...", "color: white;");

// Local Storage Data
if (localStorage.getItem("WEB_MOD_DATA") == null) {
    localStorage.setItem("WEB_MOD_DATA", JSON.stringify(WebMod.local_storage_data));
};

// Window on Load
window.onload = (e) => {
    console.clear();
    console.log(`%cFinished Loading! (Took ${(e.timeStamp / 1000).toFixed(2)} Seconds)`, "color: white;font-weight: 600;");
    setTimeout(() => {
        console.clear();
        WebMod.main_message();
        WebMod.load_scripts();
        // console.log(JSON.parse(localStorage.getItem("WEB_MOD_DATA")).preventDefault);
    }, 2500);
};

/*
window.onkeydown = (e) => {
    if (e.ctrlKey && e.shiftKey) {
        var data = JSON.parse(localStorage.getItem("WEB_MOD_DATA"));
        data.developerMode = !data.developerMode;
        localStorage.setItem("WEB_MOD_DATA", JSON.stringify(data));
    };
};
*/