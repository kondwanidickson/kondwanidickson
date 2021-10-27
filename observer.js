function youtubeObserve(query, callback) {
  let elementFound = false;

  // when specific element appears in the dom start listening for user actions
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        // find the specific element to loaded
        for (let i = 0; i < mutation.addedNodes.length; i++) {
          const buttons = document.getElementsByClassName(query);

          if (buttons.length > 0) {
            //stop loop
            i = mutation.addedNodes.length;
            elementFound = true;
            observer.disconnect();
          }
        }
      }
    });

    if (elementFound) {
      setTimeout(() => {
        callback();
      }, 10000);
    }
  });

  //observer on page load
  observer.observe(document.body, { childList: true, subtree: true });
}
