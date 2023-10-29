const goToLink = (url) => {
    const newTab = window.open(url, '_blank');
    newTab.focus();
}

export {
    goToLink
}
