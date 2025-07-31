fullscreenButton.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    // Store current iframe src
    const iframeSrc = iframe.src;
    
    // Create a new fullscreen window with just the game
    const fullscreenWindow = window.open(iframeSrc, '_blank', 'fullscreen=yes');
    
    // Focus the new window
    if (fullscreenWindow) {
      fullscreenWindow.focus();
    }
  }
});