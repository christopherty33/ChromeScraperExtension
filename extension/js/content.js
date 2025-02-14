chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "scrape") {
        let data = document.body.innerText;
        sendResponse({ scrapedData: data });
    }
});