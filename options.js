document.getElementById("save").addEventListener("click", () => {
    const keywords = document.getElementById("keywords").value;
    chrome.storage.sync.set({ keywords }, () => {
        alert("Keywords saved!");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get("keywords", (data) => {
        if (data.keywords) {
            document.getElementById("keywords").value = data.keywords;
        }
    });
});
