document.getElementById("start-scraping").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: scrapePage
        }, (result) => {
            console.log("Scraped Data:", result);
        });
    });
});

function scrapePage() {
    let scrapedData = document.body.innerText;
    console.log("Scraped Data:", scrapedData);
}