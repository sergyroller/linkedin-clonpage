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
