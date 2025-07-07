const iconNames = [
    "barcode", "cilinder", "circle-01", "circle-02", "circle-03", "circle-04", "circle-05", "circle-06", "circle-07", "circle-08", "circle-09", "circle-10", "circle-11", "circle-12", "circle-13", "circle-14", "cross", "earth", "ellipse", "eye", "flame", "flower-01", "flower-03", "flower-04", "flower-05", "flower-06", "flower-07", "flower-08", "flower-09", "flower-10", "flower-11", "flower-12", "flower-13", "flower-14", "flower-15", "flower-16", "flower-17", "flower-18", "heart-01", "heart-02", "moon", "planet-01", "planet-02", "planet-03", "star-01", "star-02", "star-03", "star-04", "star-05", "star-06", "star-07", "star-08", "star-09", "star-10", "star-11", "star-12", "star-13", "star-14", "star-15", "star-16", "star-17", "star-18", "star-19", "star-20", "star-21", "star-planetari-tensen", "wave"
];

const container = document.querySelector('.icons');
iconNames.forEach(name => {
    const div = document.createElement('div');
    div.className = 'icon';
    div.innerHTML = `<i class="cybg-${name} cybg"></i><i class="ri-file-copy-line"></i>`;
    container.appendChild(div);
});

// copy functionality
container.addEventListener('click', function (e) {
    if (e.target.classList.contains('ri-file-copy-line')) {
        const iconDiv = e.target.closest('.icon');
        const iconTag = iconDiv.querySelector('.cybg');
        if (iconTag) {
            navigator.clipboard.writeText(iconTag.outerHTML);

            // copied message
            let copiedMsg = document.createElement('span');
            copiedMsg.textContent = 'Copied!';
            copiedMsg.classList = 'copied-msg';
            e.target.appendChild(copiedMsg);

            //timeout msg
            setTimeout(() => {
                copiedMsg.remove();
            }, 1000);
        }
    }
});