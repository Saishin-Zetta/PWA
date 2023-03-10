const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  window.defferedPrompt = event;
  butInstall.classList.toggle('hidden', false);
});
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async() => {
    const prompted_event = window.defferedPrompt;
    if(!prompted_event){
        return;
    }
    prompted_event.prompt();
    const choiceResult = await prompted_event.userChoice
    if (choiceResult.outcome === 'accepted') {
      console.log('user chose to install')
    }
    else {
      console.log('user chose not to install')
    }
    window.defferedPrompt = null
    butInstall.classList.toggle('hidden', true);
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('app was successfully installed');  
  window.defferedPrompt = null;
});
