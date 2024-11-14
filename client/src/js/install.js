const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    // stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Update UI notify the user they can install the PWA
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (window.deferredPrompt) {
        // Show the install prompt
        window.deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await window.deferredPrompt.userChoice;
        // We used the prompt, so we can't use it again
        window.deferredPrompt = null;
        // Hide the install button
        butInstall.style.display = 'none';
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Log the installation
    console.log('Jate was installed', event);
    // Hide the install button
    butInstall.style.display = 'none';
});
