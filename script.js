function findParent(target, parentClass) {
   if (target.classList.contains(parentClass)) {
      return target;
   } else if (!target.parentElement) {
      return null;
   } else {
      return findParent(target.parentElement, parentClass)
   }
}

function toggleActiveButton(button, allButtons) {
   button.classList.toggle('active');

   let activeButtons = []
   for (let j = 0; j < allButtons.length; j++) {
      if (allButtons[j].classList.contains('active')) {
         activeButtons.push(allButtons[j]);
      }
   }

   if (activeButtons.length > 1) {
      for (let i = 0; i < activeButtons.length; i++) {
         activeButtons[i].classList.remove('active')
         button.classList.toggle('active');
      }
   }
}

function blurCards(allButtons, summary, skills, projects, education) {
   allButtons = Array.from(allButtons);

   let activeButtons = []
   for (let j = 0; j < allButtons.length; j++) {
      if (allButtons[j].classList.contains('active')) {
         activeButtons.push(allButtons[j]);
      }
   }

  const summaryButton = allButtons.find((button) => button.classList.contains('summary-button'));
  for (let k = 0; k < summary.length; k++) {
      if (!activeButtons.length || summaryButton.classList.contains('active')) {
         summary[k].classList.remove('blur');
      } else {
         summary[k].classList.add('blur');
      }
  }

  const skillsButton = allButtons.find((button) => button.classList.contains('skills-button'))
  for (let k = 0; k < skills.length; k++) {
      if (!activeButtons.length || skillsButton.classList.contains('active')) {
         skills[k].classList.remove('blur');
      } else {
         skills[k].classList.add('blur');
      }
  }

  const projectsButton = allButtons.find((button) => button.classList.contains('projects-button'))
  for (let k = 0; k < projects.length; k++) {
      if (!activeButtons.length || projectsButton.classList.contains('active')) {
         projects[k].classList.remove('blur');
      } else {
         projects[k].classList.add('blur');
      }
  }

  const educationButton = allButtons.find((button) => button.classList.contains('education-button'))
  for (let k = 0; k < education.length; k++) {
      if (!activeButtons.length || educationButton.classList.contains('active')) {
         education[k].classList.remove('blur');
      } else {
         education[k].classList.add('blur');
      }
  }
}

const all = document.querySelectorAll("*");
if (all) {
   const menuButtons = document.querySelectorAll('.nav-item-desktop');
   const summary = document.querySelectorAll('.summary');
   const skills = document.querySelectorAll('.skills');
   const projects = document.querySelectorAll('.projects');
   const education = document.querySelectorAll('.education');
 
   document.addEventListener('click', function(event) {
      if (!event.target.closest(".nav-list-desktop") && !event.target.closest(".burger-menu")) {
         for (let i = 0; i < all.length; i++) {
            if (all[i].classList.contains('active')) {
               all[i].classList.remove('active');
            } else if (all[i].classList.contains('blur')) {
               all[i].classList.remove('blur');
            }
         }
      }
   });
 
   for (let i = 0; i < menuButtons.length; i++) {
      menuButtons[i].addEventListener('click', function(event) {
         toggleActiveButton(menuButtons[i], menuButtons);
         blurCards(menuButtons, summary, skills, projects, education);
      });
   }
}

const burgerButton = document.querySelector('.burger-menu');
if (burgerButton) {
   const navList = document.querySelector('.nav');
   const navItems = document.querySelectorAll('.nav-item-mobile');
   const burgerBars = document.querySelectorAll('.bar');
   const main = document.querySelector('.main');

   navList.addEventListener('click', (event) => {
      const clickedItem = findParent(event.target, 'nav-item-mobile');
      if (!clickedItem) {
         menuClickHandler();
      }
   })

   for (i = 0; i < navItems.length; i++) {
      navItems[i].addEventListener('click', menuClickHandler);
   }

   burgerButton.addEventListener('click', menuClickHandler);
   main.addEventListener('click', otherClickHandler);

   function menuClickHandler(e) {
      burgerButton.classList.toggle('active');
      navList.classList.toggle('active');
      burgerBars.forEach(bar => bar.classList.toggle('active'));
   }

   function otherClickHandler(e) {
      burgerButton.classList.remove('active');
      navList.classList.remove('active');
      burgerBars.forEach(bar => bar.classList.remove('active'));
   }
}