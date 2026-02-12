let historyStack = [];

function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');
    historyStack.push(pageId);
}

function showSection(sectionId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
    historyStack.push(sectionId);
}

function goBack() {
    historyStack.pop(); // remove current
    let previousPage = historyStack.pop(); // get previous

    if (previousPage) {
        goToPage(previousPage);
    } else {
        goToPage('page2');
    }
}
