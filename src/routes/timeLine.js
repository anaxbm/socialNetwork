
//Creating elements
export const timeLine = () => {
  /* contenedor principal de los otros dos divs*/
  const timeLineContainer = document.createElement("section");
  const postUserContainer = document.createElement("article");
  const inputText = document.createElement("input");
  const postingButton = document.createElement("button");
  const postsContainer = document.createElement("article");
  const userPicture = document.createElement("img");
  const userName = document.createElement("h4");
  const userContainer = document.createElement("div");
  const userNameContainer = document.createElement("div");
  const contentPostContainer = document.createElement("div");
  const iconsContainer = document.createElement("div");
  const menuBarIconsContainer = document.createElement("div");

  /*adding classes*/
  /*dentro de maintimeline debe estar*/
  timeLineContainer.classList.add("mainTimeline-Container");
  postUserContainer.classList.add("createPostTLContainer");
  inputText.classList.add("inputText");
  postingButton.classList.add("postButton");
  userContainer.classList.add("userContainer");
  userNameContainer.classList.add("userNameContainer");
  userPicture.classList.add("userPicture");
  contentPostContainer.classList.add("contentPostContainer");
  iconsContainer.classList.add("iconsContainer"); //same class to apply same height
  menuBarIconsContainer.classList.add("iconsContainer");

  /*creating  sub-containers for bar and icons to like and edit*/
  const iconsImages_1 = document.createElement("img");
  const iconsImages_2 = document.createElement("img");
  const iconsImages_3 = document.createElement("img");
  const menuBarImages_1 = document.createElement("img");
  const menuBarImages_2 = document.createElement("img");
  const menuBarImages_3 = document.createElement("img");
  iconsImages_1.classList.add("iconImages");
  iconsImages_2.classList.add("iconImages");
  iconsImages_3.classList.add("iconImages");
  menuBarImages_1.classList.add("menuBarImages");
  menuBarImages_2.classList.add("menuBarImages");
  menuBarImages_3.classList.add("menuBarImages");

  inputText.type = "text";
  postingButton.textContent = "publicar";
  userPicture.src = "./images/usuario.png";
  userName.textContent = "Adahi Gallardo";
  iconsImages_1.src = "./images/bin.png";
  iconsImages_2.src = "./images/edit.png";
  iconsImages_3.src = "./images/like.png";
  menuBarImages_1.src = "./images/findAHome.png";
  menuBarImages_2.src = "./images/pet-care.png";
  menuBarImages_3.src = "./images/myAccount.png";

  /* displays input text and button */

  postUserContainer.append(inputText, postingButton);
  userNameContainer.append(userPicture, userName);
  userContainer.append(
    postUserContainer,
    userNameContainer,
    contentPostContainer
  );
  iconsContainer.append(iconsImages_1, iconsImages_2, iconsImages_3);
  menuBarIconsContainer.append(
    menuBarImages_1,
    menuBarImages_2,
    menuBarImages_3
  );

  timeLineContainer.append(
    postUserContainer,
    postsContainer,
    userContainer,
    iconsContainer,
    menuBarIconsContainer
  );

  return timeLineContainer;
};

