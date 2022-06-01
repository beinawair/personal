//selector
const section = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls');
const sectionSingleButton = document.querySelectorAll('.control');
const allSection = document.querySelector('.main-content');
const themeButton = document.querySelector('.theme-btn');
//end selector

//transition
function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectionSingleButton.length; i++) {
    sectionSingleButton[i].addEventListener('click', function () {
      let currentButton = document.querySelectorAll('.active-btn');
      currentButton[0].className = currentButton[0].className.replace(
        ' active-btn',
        ''
      );
      this.className += ' active-btn';
    });
  }

  //section active class
  allSection.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from other buttons
      // sectionButtons.forEach((btn) => {
      //   btn.classList.remove('active');
      // });
      // e.target.classList.add('active');

      //hide other sections
      section.forEach((section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });

  //toggle theme
  themeButton.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('dark-mode');
  });
}
//end transition

//function call
PageTransitions();
//end function call
