// IMPORT DATA
import arrayPost from "./data.js";

// Variables
const expandNews = document.querySelector("#linkedin-news .load-more");
const btnCreatePublication = document.querySelector("#create-publication");

eventListener();
function eventListener() {
  // Show more news
  expandNews.addEventListener("click", () => {
    const linkedinNews = document.querySelector("#linkedin-news .list-news");
    const buttonP = document.querySelector("#linkedin-news .load-more p");
    linkedinNews.classList.toggle("expand");
    if (linkedinNews.classList.contains("expand")) {
      buttonP.textContent = "Mostrar menos";
    } else {
      buttonP.textContent = "Mostrar más";
    }
  });
  // Create publication
  btnCreatePublication.addEventListener("click", createPublication);
}

// FUNCTIONS

function createPublication() {
  const modalDiv = document.querySelector("#modal-create-publication");
  console.log(modalDiv);
  const HTML = `<div class="modal-box-container">
  <div class="modal-box">
    <div class="top-modal">
      <h3>Crear una publicación</h3>
      <svg id="close-modal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
      </svg>
   </div>
   <div class="content-modal">
     <div class="top-content">
       <img width="48" src="https://media-exp1.licdn.com/dms/image/C5603AQHSSCOCnJTWTg/profile-displayphoto-shrink_100_100/0/1589908511130?e=1655337600&v=beta&t=yeAmu8OHaSUv5PGA-5K-Ge9hbw_yQ0qC8WlJcj7IdWA" alt="Foto de perfil">
       <a class="button" href="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
          <path d="M5 4a3 3 0 113 3 3 3 0 01-3-3zm3.75 4h-1.5A2.25 2.25 0 005 10.25V15h6v-4.75A2.25 2.25 0 008.75 8z"></path>
        </svg>
        <p>Sergio Ruiz Moya</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
          <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
        </svg>
       </a>
       <a class="button" href="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
          <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
        </svg>
        <p>Cualquiera</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
          <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
        </svg>
       </a>
     </div>
     <div class="text-area-content">
      <textarea placeholder="¿Sobre qué quieres hablar?" name="textarea" rows="10" cols="50"></textarea>
     </div>
     <div class="bottom-content">
      <a href="#" class="add-hashtag">Añadir hastag</a>
      <div class="bottom-content-inner">
       <div class="group-buttons">
         <div class="image button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
          </svg>
         </div>
         <div class="video button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
          </svg>
        </div>
        <div class="document button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
          </svg>
        </div>
        <div class="business button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
          </svg>
        </div>
        <div class="special button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
          </svg>
        </div>
        <div class="poll button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
          </svg>
        </div>
        <div class="others button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
          </svg>
        </div>
       </div>
       <a class="button-anymore" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
          <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
        </svg>
        <p>Cualquiera</p>
       </a>
       <a class="button-publish" href="#">Publicar</a>
     </div>
    </div>
   </div>
  </div>
</div>
  `;
  modalDiv.insertAdjacentHTML("beforeend", HTML);
  const closeModal = document.querySelector("#close-modal");
  closeModal.addEventListener("click", () => {
    const modal = document.querySelector(".modal-box-container");
    modal.remove();
  });
}
dynamicPublication();
function dynamicPublication() {
  const ubicationPlace = document.querySelector(".main-area > div:nth-child(3)");
  const mainItem = document.createElement("div");
  mainItem.classList.add("main-item");
  ubicationPlace.insertAdjacentElement("beforebegin", mainItem);

  const innerSection = document.createElement("div");
  innerSection.classList.add("inner-section");
  innerSection.setAttribute("id", "feed-card");
  mainItem.appendChild(innerSection);

  // Verify if publication have recommended interactions
  if (arrayPost[0].interactions.recommeded.length > 0) {
    const topContent = document.createElement("div");
    topContent.classList.add("top-content", "no-mobile");
    innerSection.appendChild(topContent);

    const recommendedDiv = document.createElement("div");
    recommendedDiv.classList.add("recommended");
    topContent.appendChild(recommendedDiv);

    const recommededDivWrappedOne = document.createElement("div");
    const recommededDivWrappedTwo = document.createElement("div");
    recommededDivWrappedOne.classList.add("recommended-wrapped");
    recommendedDiv.appendChild(recommededDivWrappedOne);
    recommededDivWrappedTwo.classList.add("recommended-wrapped");
    recommendedDiv.appendChild(recommededDivWrappedTwo);

    const tagAOne = document.createElement("a");
    const tagATwo = document.createElement("a");
    const tagPThree = document.createElement("span");
    tagAOne.setAttribute("href", "#");
    recommededDivWrappedOne.appendChild(tagAOne);
    tagATwo.setAttribute("href", "#");
    tagPThree.textContent = "recomienda esto";
    recommededDivWrappedOne.appendChild(tagATwo);
    recommededDivWrappedOne.appendChild(tagPThree);

    const imgTag = document.createElement("img");
    imgTag.setAttribute("src", "https://static-exp1.licdn.com/sc/h/1c5u578iilxfi4m4dvc4q810q");
    imgTag.setAttribute("width", "24");
    imgTag.setAttribute("height", "24");
    tagAOne.appendChild(imgTag);

    const elementP = document.createElement("p");
    elementP.textContent = arrayPost[0].interactions.recommeded[0];
    tagATwo.appendChild(elementP);

    const moreInfo = document.createElement("div");
    moreInfo.classList.add("more-info");
    recommededDivWrappedTwo.appendChild(moreInfo);

    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
    </svg>
    `;
    moreInfo.insertAdjacentHTML("beforeend", svg);
  }

  // CREATE MAIN CONTENT

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  innerSection.appendChild(mainContent);

  const headerFeed = document.createElement("div");
  headerFeed.classList.add("header-feed");
  mainContent.appendChild(headerFeed);

  const textFeed = document.createElement("div");
  textFeed.classList.add("text-feed");
  mainContent.appendChild(textFeed);

  const imageFeed = document.createElement("div");
  imageFeed.classList.add("image-feed");
  mainContent.appendChild(imageFeed);

  const likesWrapper = document.createElement("div");
  likesWrapper.classList.add("likes-wrapper");
  mainContent.appendChild(likesWrapper);

  const buttonsInteraction = document.createElement("div");
  buttonsInteraction.classList.add("buttons-interaction");
  mainContent.appendChild(buttonsInteraction);

  // CREATE HEADER-FEED
  const headerFeedATagOne = document.createElement("a");
  headerFeedATagOne.setAttribute("href", "#");
  headerFeed.appendChild(headerFeedATagOne);

  const actor = document.createElement("div");
  actor.classList.add("actor");
  headerFeedATagOne.appendChild(actor);

  const imgActor = document.createElement("img");
  imgActor.setAttribute("src", arrayPost[0].photoPerfil);
  imgActor.setAttribute("width", "48");
  imgActor.setAttribute("height", "48");
  actor.appendChild(imgActor);

  const infoActor = document.createElement("div");
  infoActor.classList.add("info-actor");
  actor.appendChild(infoActor);

  const infoActorPName = document.createElement("p");
  infoActorPName.classList.add("name");
  infoActorPName.textContent = arrayPost[0].type[2].name;
  infoActor.appendChild(infoActorPName);

  const followersP = document.createElement("p");
  followersP.textContent = arrayPost[0].type[2].followers + " seguidores";
  infoActor.insertAdjacentElement("beforeend", followersP);

  const dateTimeInfoActor = document.createElement("div");
  dateTimeInfoActor.classList.add("datetime");
  infoActor.appendChild(dateTimeInfoActor);

  const dateTimeInfoActorP = document.createElement("p");
  dateTimeInfoActorP.textContent = arrayPost[0].time + " • ";
  dateTimeInfoActor.appendChild(dateTimeInfoActorP);

  const dateTimeInfoActorSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
    </svg>
    `;
  dateTimeInfoActor.insertAdjacentHTML("beforeend", dateTimeInfoActorSvg);

  const headerFeedATagTwo = document.createElement("a");
  headerFeedATagTwo.setAttribute("href", "#");
  headerFeed.appendChild(headerFeedATagTwo);

  const followDiv = document.createElement("div");
  followDiv.classList.add("follow", "no-mobile");
  headerFeedATagTwo.appendChild(followDiv);

  // BEGIN PRACTICES WITH TEMPLATE STRINGS
  const svgFollowP = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
        <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
      </svg>
      <p>Seguir</p>
  `;
  followDiv.insertAdjacentHTML("beforeend", svgFollowP);

  const innerTextFeed = `
  <p class="text">
  ${arrayPost[0].text}
  </p>`;
  textFeed.insertAdjacentHTML("beforeend", innerTextFeed);

  const innerImageFeed = `
  <img src="${arrayPost[0].mediaPublication}">
  <a href="#">
    <div class="image-details">
      <p>${arrayPost[0].textImage}</p>
      <div class="more-details">
        <p>${arrayPost[0].moreInfoUrl}</p>
        <p>•</p>
        <p>${arrayPost[0].moreInfoTime}</p>
      </div>
    </div>
  </a>
  `;
  imageFeed.insertAdjacentHTML("beforeend", innerImageFeed);

  // CHECK IF PUBLICATION HAVE INTERACTIONS
  for (const values in arrayPost[0].interactions) {
    if (arrayPost[0].interactions[values].length > 0) {
      const likesDiv = document.createElement("div");
      likesDiv.classList.add("likes");
      likesWrapper.appendChild(likesDiv);
      break;
    }
  }

  for (const values in arrayPost[0].interactions) {
    const likesDiv = document.querySelector(".likes-wrapper .likes");
    const imgLikes = document.createElement("img");
    const p = document.createElement("p");
    p.setAttribute("id", "people");

    if (arrayPost[0].interactions[values].length > 0) {
      switch (values) {
        case "likes":
          console.log(arrayPost[0].interactions[values]);
          imgLikes.setAttribute("src", "https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt");
          if (arrayPost[0].interactions[values].length < 2) {
            p.textContent = arrayPost[0].interactions[values][0];
          } else if (arrayPost[0].interactions[values].length === 2) {
            p.textContent = arrayPost[0].interactions[values][0] + " y " + (arrayPost[0].interactions[values].length - 1) + " persona más";
          } else {
            p.textContent = arrayPost[0].interactions[values][0] + " y " + (arrayPost[0].interactions[values].length - 1) + " personas más";
          }
          likesDiv.appendChild(p);
          p.insertAdjacentElement("beforebegin", imgLikes);
          break;
      }
    }
  }
  const innerButtonInteractions = `
  <a href="#" class="button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
     <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
    </svg>
    <p>Recomendar</p>
  </a>
  <a href="#" class="button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
    </svg>
    <p>Comentar</p>
  </a>
  <a href="#" class="button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
    </svg>
    <p>Compartir</p>
  </a>
  <a href="#" class="button no-mobile">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
    </svg>
    <p>Enviar</p>
  </a>
`;

  buttonsInteraction.insertAdjacentHTML("beforeend", innerButtonInteractions);
}
