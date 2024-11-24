function styleText(selector, fontSize = '16px', color = 'black') {
    const element = document.querySelector(selector);

    if (!element) {
        console.error(`Element with selector "${selector}" not found.`);
        return;
    }

    element.style.fontSize = fontSize;
    element.style.color = color;
}

module.exports = styleText;
