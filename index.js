function toggleOnMobile(elem) {
    if (window.innerWidth <= 992) {
      const elemVisible = (elem.style.display.length > 0 && elem.style.display !== 'none');
      if (elemVisible) {
        elem.style.display = 'none';
      } else {
        elem.style.display = 'flex';
      }
    }
  }
  
  function initPopupCloser() {
    const popupCloser = document.querySelector('.close-popup');
    if (popupCloser) {
      popupCloser.addEventListener('click', (e) => {
        document.querySelector('body').classList.remove('hidden-scrollbar');
        if (window.innerWidth <= 992) {
          e.target.parentElement.remove();
        } else {
          document.querySelector('.desktop-project-popup-wrapper').remove();
        }
        document.querySelector('body').style.overflow = 'auto';
      });
    }
  }
  function showPopup(recentWorksPopupData) {
    const popupWrapper = document.querySelector('#popup-wrapper');
    if (window.innerWidth <= 992) {
      let popup = `<section class="mobile-project-popup project-popup d-flex flex-cols">
          <img src="images/close-menu.png" class="close-popup" alt="close project preview"title="Close project preview" >
          <img src="${recentWorksPopupData.coverImgMobile}" class="popup-img" alt="Project placeholder">
          <h3 class="section-title-heading">
            ${recentWorksPopupData.title}
          </h3>
          <ul class="project-languages d-flex flex-center">
          `;
      recentWorksPopupData.languagesMobile.forEach((language) => {
        popup += `<li>${language}</li>`;
      });
      popup += `</ul>
          <p class="description">
            ${recentWorksPopupData.description}
          </p>
          <div class="action-btns d-flex">
            <a href="${recentWorksPopupData.liveUrl}" class="action-btn">
              
              See Live
              <img src="images/see-source.png" alt="view live platform">
            </a>
            <a href="${recentWorksPopupData.sourceUrl}" class="action-btn">
              See Source
              <img src="images/Icon-GitHub.png" alt="See source on github">
            </a>
          </div>
        </section>
      `;
      popupWrapper.innerHTML = popup;
    } else {
      let popup = `
        <div class="desktop-project-popup-wrapper">
            <section class="d-flex flex-cols popup-content">
              <span class="close-popup-wrapper close-popup">
                <img src="images/close-desktop-popup.png" alt="close project preview"title="Close project preview">
              </span>
                <img src="${recentWorksPopupData.coverImgDesktop}" class="project-img-desktop" alt="Project placeholder">
                <div class="d-flex title-section">
                  <h3 class="section-title-heading">
                    ${recentWorksPopupData.title}
                  </h3>
                  <div class="action-btns">
                    <a href="${recentWorksPopupData.liveUrl}" class="action-btn">
                      See Live &nbsp;&nbsp;
                      <img src="images/see-source.png" alt="view live platform">
                    </a>
                    ${
                      recentWorksPopupData.sourceUrl == '#' ? 
                      '' : `<a href="${recentWorksPopupData.sourceUrl}" class="action-btn">
                      See Source&nbsp;&nbsp;
                      <img src="images/Icon-GitHub.png" alt="See source on github">
                    </a>`
                    }
                  </div>
                </div>
                <ul class="project-languages d-flex">
                `;
      recentWorksPopupData.languagesDesktop.forEach((language) => {
        popup += `<li>${language}</li>`;
      });
      popup += `</ul>
                <p class="description">
                </ul>
                <p class="description">
                  ${recentWorksPopupData.description}
                </p>
            </section>
          </div>
      `;
      popupWrapper.innerHTML = popup;
    }
  }
  