chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        chrome.tabs.create({ url: 'https://t.me/hackscript900' });
    }
});
console.log("Developer By Ayushman Medcalia , Follow me on telegram https://t.me/helpinghandlpu , follow me on Github https://github.com/ayushman542 , Follow me on linkedin https://www.linkedin.com/in/ayushman-medcalia-4a0908252/ ");

