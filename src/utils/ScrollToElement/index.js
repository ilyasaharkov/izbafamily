export const scrollToElementToID = (id, position = 150) => {
    const getElementByID = document.getElementById(id);
    if (!getElementByID) return;
    const yOffset = getElementByID.getBoundingClientRect().top + window.pageYOffset - position;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
};
