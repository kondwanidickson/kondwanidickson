//from ./observe.js
youtubeObserve(`_6s5d _71pn _-kb segoe`, run);

const chats = [];
const divScroll = document.querySelectorAll(
  'span[class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5"]'
);

function run() {
  const list = document.querySelectorAll('div[class="l9j0dhe7"]');
  // console.log(list);
  for (const element of list) {
    const profile = element.querySelectorAll(
      'span[class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5"]'
    );

    if (profile) {
      //title and profile link
      const pflName = profile.innerText;
      const txtMsg = element.querySelector(
        'span[class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5 ojkyduve"]'
      );
      const pflMsg = txtMsg?.innerText || "";
      const pflLink = element.querySelector('a[role="link"]');

      const chat = {
        profileName: pflName,
        profileMessage: pflMsg.replace(/\n.*/gim, ""),
        profileLink: pflLink?.href || "",
      };
      const exists = chats.find(
        (p) => p.profileMessage === chat.profileMessage
      );
      if (!exists) {
        chats.push(chat);
      }
      console.log("Post", chat);

      //function that creates a div in the profile link
      createElements(element);
    }
    window.scrollTo(0, profile.scrollHeight);
  }

  //from ./observe.js
  // youtubeObserve(`_6s5d _71pn _-kb segoe`, run);
}

function createElements(_element) {
  const placement = _element.querySelector("div.qzhwtbm6.knvmm38d");
  const divElement = document.createElement("div");
  const selectElement = document.createElement("div");
  divElement.id = "chat-type";
  selectElement.id = "text";
  selectElement.innerText = "no option";
  // selectElement.appendChild(optionsElement);

  //setting the styles for the elements
  placement.style["display"] = "flex";
  placement.style["justify-content"] = "space-between";
  divElement.style["backgroundColor"] = "rgb(0, 191, 255)";
  divElement.style["width"] = "60px";
  divElement.style["height"] = "10px";
  divElement.style["padding"] = "0.5rem";
  // divElement.style["paddingRight"] = "0.5rem";
  selectElement.style["color"] = "rgb(255, 255, 255)";
  selectElement.style["width"] = "inherit";
  selectElement.style["height"] = "inherit";
  selectElement.style["fontSize"] = "10px";
  divElement.appendChild(selectElement);
  placement.appendChild(divElement);
  console.log("creating div element");
}
