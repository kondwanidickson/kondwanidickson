//from ./observe.js
youtubeObserve('div[role="main"]', run);

const chats = [];

function run() {
  const iPlacement = document.querySelector('form[method="POST"]');
  console.log("Icon Plce: ", iPlacement);
  iconClick(iPlacement);

  const placement = document.querySelector(
    "div.orhb3f3m.czkt41v7.fmqxjp7s.emzo65vh.j83agx80.qt6c0cv9.mrt03zm.pmk7jnqg.tdcub1r8.jb3vyjys.rz4wbd8a.a8nywdso"
  );
  console.log(placement);
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
      createElements(element, `${pflLink?.href || ""}`);
    }
    window.scrollTo(0, profile.scrollHeight);
  }

  //from ./observe.js
  // youtubeObserve(`_6s5d _71pn _-kb segoe`, run);
}

//function to add an icon link
function iconClick(_iPlace) {
  const divElement = document.createElement("div");
  const buttonElement = document.createElement("i");
  const menuElement = document.createElement("div");
  const itemElement1 = document.createElement("div");
  const itemElement2 = document.createElement("div");
  const itemElement3 = document.createElement("div");
  const itemElement4 = document.createElement("div");

  const itemList = [
    { Item: "Affiliate student", Color: "Green" },
    { Item: "Group Leads", Color: "Blue" },
    { Item: "Group Leads Partiner", Color: "Red" },
    { Item: "Family", Color: "Green" },
    { Item: "High VAlued Partner", Color: "Blue" },
    { Item: "Graphics Designer", Color: "Yellow" },
    { Item: "New Friend", Color: "Red" },
    { Item: "Chatbot", Color: "Yellow" },
  ];

  divElement.setAttribute("class", "btn-group dropup btn");
  buttonElement.setAttribute("class", "fa fa-facebook");
  buttonElement.setAttribute("data-toggle", "dropdown");
  buttonElement.setAttribute("aria-haspopup", "true");
  buttonElement.setAttribute("aria-expanded", "false");
  menuElement.setAttribute("class", "msg dropdown-menu");
  itemElement1.setAttribute("class", "dropdown-item");
  itemElement2.setAttribute("class", "dropdown-item");
  itemElement3.setAttribute("class", "dropdown-item");
  itemElement4.setAttribute("class", "dropdown-item");

  // _iPlace.style["display"] = "flex";
  divElement.style["position"] = "absolute";
  divElement.style["left"] = "54.1rem";
  divElement.style["transform"] = "translateY(-38px)";
  menuElement.style["zIndex"] = "1000 !important";
  menuElement.style["transform"] =
    "translate(1302px, 0) translate(-130%, -100%)";
  buttonElement.style["width"] = "10px";
  buttonElement.style["height"] = "10px";
  buttonElement.style["backgroundColor"] = "#111";

  itemElement1.innerText = itemList[0].Item;
  itemElement2.innerText = itemList[1].Item;
  itemElement3.innerText = itemList[2].Item;
  itemElement4.innerText = itemList[3].Item;

  menuElement.appendChild(itemElement1);
  menuElement.appendChild(itemElement2);
  menuElement.appendChild(itemElement3);
  menuElement.appendChild(itemElement4);
  buttonElement.appendChild(menuElement);
  divElement.appendChild(buttonElement);
  _iPlace.childNodes[0].appendChild(divElement);
}

//function that creates a drop down button in the profile link
function createElements(_element, _urlID) {
  //creating the HTML elements
  //profile Button
  const divElement = document.createElement("div");
  const buttonElement = document.createElement("button");
  const menuElement = document.createElement("div");
  const itemElement1 = document.createElement("div");
  const itemElement2 = document.createElement("div");
  const itemElement3 = document.createElement("div");
  const itemElement4 = document.createElement("div");

  divElement.setAttribute("id", substGetID(_urlID));
  divElement.setAttribute("class", "dropdown show");
  buttonElement.setAttribute(
    "class",
    "btn btn-secondary btn-sm dropdown-toggle"
  );
  buttonElement.setAttribute("data-toggle", "dropdown");
  buttonElement.setAttribute("aria-haspopup", "true");
  buttonElement.setAttribute("aria-expanded", "false");
  menuElement.setAttribute("class", "dropdown-menu");
  itemElement1.setAttribute("class", "dropdown-item");
  itemElement2.setAttribute("class", "dropdown-item");
  itemElement3.setAttribute("class", "dropdown-item");
  itemElement4.setAttribute("class", "dropdown-item");
  buttonElement.innerText = "Select Option";

  //setting the styles for the elements
  divElement.style["position"] = "absolute";
  divElement.style["left"] = "5rem";
  divElement.style["top"] = "3.3rem";
  divElement.style["backgroundColor"] = "transparent";
  divElement.style["pointerEvents"] = "arrow";
  divElement.style["width"] = "100px";
  divElement.style["paddingLeft"] = "0.3rem";
  menuElement.style["zIndex"] = "1000 !important";
  buttonElement.style["color"] = "rgb(255, 255, 255)";
  buttonElement.style["height"] = "17px";
  buttonElement.style["paddingTop"] = "0px";
  buttonElement.style["fontSize"] = "10px";

  const itemList = ["item 1", "item 2", "item 3", "item 4"];
  itemElement1.innerText = itemList[0];
  itemElement2.innerText = itemList[1];
  itemElement3.innerText = itemList[2];
  itemElement4.innerText = itemList[3];

  menuElement.appendChild(itemElement1);
  menuElement.appendChild(itemElement2);
  menuElement.appendChild(itemElement3);
  menuElement.appendChild(itemElement4);
  buttonElement.appendChild(menuElement);
  divElement.appendChild(buttonElement);
  // placement.childNodes[1].appendChild(divElement);
  _element.childNodes[1].appendChild(divElement);
  // console.log(_element.childNodes[1]);
}

function substGetID(_str) {
  const regex1 = new RegExp("//....................", "gm");
  const str1 = _str;
  const subst1 = ``;

  // The substituted value will be contained in the result variable
  const result1 = str1.replace(regex1, subst1);

  const regex = new RegExp("/", "gm");
  const str = result1.split(":")[1];
  const subst = ``;

  // The substituted value will be contained in the result variable
  const result = str.replace(regex, subst);

  console.log("Substitution result ID: ", result);
  return result;
}
