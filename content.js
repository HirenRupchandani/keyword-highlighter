function highlightText(node, keyword) {
    const span = document.createElement('span');
    span.style.backgroundColor = 'yellow';
    span.textContent = keyword;

    const mark = document.createElement('mark');
    mark.appendChild(span);

    const regex = new RegExp(`(${keyword})`, 'gi');
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
    let textNode;

    while (textNode = walker.nextNode()) {
        const matches = textNode.nodeValue.match(regex);
        if (matches) {
            const parent = textNode.parentNode;
            const frag = document.createDocumentFragment();
            let lastIndex = 0;
            matches.forEach(match => {
                const index = textNode.nodeValue.indexOf(match, lastIndex);
                if (index > lastIndex) {
                    frag.appendChild(document.createTextNode(textNode.nodeValue.slice(lastIndex, index)));
                }
                frag.appendChild(span.cloneNode(true));
                lastIndex = index + match.length;
            });
            frag.appendChild(document.createTextNode(textNode.nodeValue.slice(lastIndex)));
            parent.replaceChild(frag, textNode);
        }
    }
}

function highlightKeywords(keywords) {
    keywords.forEach(keyword => {
        highlightText(document.body, keyword);
    });
}

chrome.storage.sync.get("keywords", (data) => {
    if (chrome.runtime.lastError) {
        console.error("Error accessing storage:", chrome.runtime.lastError);
        return;
    }

    if (data.keywords) {
        const keywords = data.keywords.split(",").map(keyword => keyword.trim());
        highlightKeywords(keywords);
    }
});
