function scrollTrack(elementId, direction) {
    const track = document.getElementById(elementId);
    if (!track) {
        console.error("Could not find element with id='" + elementId + "'");
        return;
    }
    const scrollAmount = 324;
    track.scrollBy({
        left: direction * scrollAmount, 
        behavior: 'smooth'
    });
}
