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

  const summaryButton = allButtons.find((button) => button.classList.contains('summary_button'));
  for (let k = 0; k < summary.length; k++) {
      if (!activeButtons.length || summaryButton.classList.contains('active')) {
         summary[k].classList.remove('blur');
      } else {
         summary[k].classList.add('blur');
      }
  }

  const skillsButton = allButtons.find((button) => button.classList.contains('skills_button'))
  for (let k = 0; k < skills.length; k++) {
      if (!activeButtons.length || skillsButton.classList.contains('active')) {
         skills[k].classList.remove('blur');
      } else {
         skills[k].classList.add('blur');
      }
  }

  const projectsButton = allButtons.find((button) => button.classList.contains('projects_button'))
  for (let k = 0; k < projects.length; k++) {
      if (!activeButtons.length || projectsButton.classList.contains('active')) {
         projects[k].classList.remove('blur');
      } else {
         projects[k].classList.add('blur');
      }
  }

  const educationButton = allButtons.find((button) => button.classList.contains('education_button'))
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
      if (!event.target.closest(".nav-list-desktop") && !event.target.closest(".burger-menu") && !event.target.closest(".switcher")) {
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

const languageSwitcher = document.querySelectorAll('.switcher');
if (languageSwitcher) {
   const innerTextList = [];
   const innerHTMLList = [];
   const defaultText = new Object();
   const tumbler = document.querySelectorAll('.tumbler');
   
   innerTextList.push(document.querySelector('.summary_title'));
   innerTextList.push(document.querySelector('.skills_title'));
   innerTextList.push(document.querySelector('.projects_title'));
   innerTextList.push(document.querySelector('.education_title'));
   innerTextList.push(document.querySelector('.contacts_title'));
   innerTextList.push(document.querySelector('.english_title'));
   innerTextList.push(document.querySelector('.age_title'));
   innerTextList.push(document.querySelector('.summary_text_one'));
   innerTextList.push(document.querySelector('.summary_text_three'));
   innerTextList.push(document.querySelector('.summary_text_four'));
   innerTextList.push(document.querySelector('.summary_text_five'));
   innerTextList.push(document.querySelector('.summary_button'));
   innerTextList.push(document.querySelector('.skills_button'));
   innerTextList.push(document.querySelector('.projects_button'));
   innerTextList.push(document.querySelector('.education_button'));
   innerTextList.push(document.querySelector('.name_span'));
   innerTextList.push(document.querySelector('.phone'));
   innerTextList.push(document.querySelector('.linkedin'));
   innerTextList.push(document.querySelector('.telegram'));
   innerTextList.push(document.querySelector('.email'));
   innerTextList.push(document.querySelector('.selenium'));
   innerTextList.push(document.querySelector('.wdio'));
   innerTextList.push(document.querySelector('.gardeners'));
   innerTextList.push(document.querySelector('.cv'));
   innerTextList.push(document.querySelector('.bot'));
   innerTextList.push(document.querySelector('.postgre'));

   innerHTMLList.push(document.querySelector('.summary_text_two'));
   innerHTMLList.push(document.querySelector('.speciality'));
   innerHTMLList.push(document.querySelector('.country'));
   innerHTMLList.push(document.querySelector('.medicine'));
   innerHTMLList.push(document.querySelector('.python'));
   innerHTMLList.push(document.querySelector('.qa'));
   innerHTMLList.push(document.querySelector('.vps'));
   innerHTMLList.push(document.querySelector('.virtualization'));
   innerHTMLList.push(document.querySelector('.automation'));
   innerHTMLList.push(document.querySelector('.functional'));
   innerHTMLList.push(document.querySelector('.regression'));
   innerHTMLList.push(document.querySelector('.ui'));
   innerHTMLList.push(document.querySelector('.sql'));
   innerHTMLList.push(document.querySelector('.api'));

   (function getDefaultText(e) {
      for (i of innerTextList) {
         defaultText[i.classList[i.classList.length - 1]] = i.innerText;
      }

      for (i of innerHTMLList) {
         defaultText[i.classList[i.classList.length - 1]] = i.innerHTML;
      }
   })();

   function translateRussian(e) {
      const russianProperty = {
         summary_title: 'Обо мне:',
         skills_title: 'Мои навыки:',
         projects_title: 'Мои проекты:',
         education_title: 'Моё образование:',
         contacts_title: 'Мои контакты:',
         english_title: 'Мой английский:',
         age_title: 'Мой возраст:',
         summary_text_one: 'По образованию профессиональный медик, но я понял, что мир IT мне гораздо ближе. Я начал свой путь с Python, затем в арсенале появились JavaScript и TypeScript.',
         summary_text_two: 'Прошел стажировку по специальности "Автоматизация тестирования" в <span><a class="link a1qa" target="_blank" href="https://www.a1qa.com/">A1QA</a></span> и имею опыт работы в течение 6 месяцев. Я занимаюсь разработкой и непрерывной интеграцией автоматизированных тестов на Node.js и Python, включая тестирование баз данных, REST API и веб-приложений с использованием Selenium WebDriver и WebdriverIO.',
         summary_text_three: 'Параллельно практикую выполнение фриланс заказов на парсинг и систематизацию данных с использованием Python, разработку веб-сайтов и создание высоконагруженных асинхронных Telegram-ботов, удаленное администрирование серверов Nginx и Linux.',
         summary_text_four: 'Я не люблю стоять на месте и постоянно учусь. Есть планы освоить еще один объектно-ориентированный язык программирования (Java/C#).',
         summary_text_five: 'В качестве хобби я занимаюсь сборкой и настройкой ПК, катаюсь на горных лыжах, посещаю бары, музыкальные фестивали и концерты.',
         summary_button: 'Обо мне',
         skills_button: 'Навыки',
         projects_button: 'Проекты',
         education_button: 'Образование',
         name_span: 'Антон Липатов',
         speciality: '<span>Инженер по разработке</span><br><span>ПО в тестировании</span><br><span>(QA автоматизация)</span>',
         country: '<img class="socials" src="./assets/img/pin.png" alt="Pin" width="17" height="17"><a class="link" href="https://www.google.kz/maps/place/Almaty" target="_blank">Казахстан</a><img class="socials flag" src="./assets/img/kz.png" alt="KZ" width="17" height="17">(или удалёнка)',
         phone: 'Телефон: +77478595164',
         linkedin: 'Линкед: Антон Липатов',
         telegram: 'Телеграм: lines14',
         email: 'Почта: lines14.qa@gmail.com',
         medicine: '<img class="socials" src="./assets/img/check.png" alt="Complete" width="16" height="16">Московский медицинский колледж №7 / Российский государственный медицинский университет - Фельдшер СМП',
         python: '<img class="socials" src="./assets/img/check.png" alt="Complete" width="16" height="16">Московский авиационный институт - Разработка на Python, курс переподготовки',
         qa: '<img class="socials" src="./assets/img/check.png" alt="Complete" width="16" height="16"><a class="link" href="https://qa-academy.lv/en/" target="_blank">QA Academy - Курс "Автоматизация тестирования"</a>',
         vps: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Настройка VPS/VDS серверов',
         virtualization: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Виртуализация',
         automation: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Автоматизация',
         functional: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Функциональные тесты',
         regression: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Регрессионные тесты',
         ui: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">UI тестирование',
         sql: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Тесты баз данных SQL',
         api: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Тестирование REST API',
         selenium: 'Node.js тест-фреймворк на базе Selenium WebDriver, Mocha и Chai',
         wdio: 'Node.js тест-фреймворк на базе WebdriverIO, Axios, Mocha и Chai',
         gardeners: 'Веб-сайт садоводческой компании (пет-проект)',
         cv: 'Этот веб-сайт с резюме',
         bot: 'Высоконагруженный Телеграм бот на базе Python и Aiogram с встроенной CRM',
         postgre: 'Средства для удалённого администрирования PostgreSQL на Python проектах',
      }

      for (i of innerTextList) {
         i.innerText = russianProperty[i.classList[i.classList.length - 1]];
      }

      for (i of innerHTMLList) {
         i.innerHTML = russianProperty[i.classList[i.classList.length - 1]];
      }
   }

   function translateEnglish(e) {
      for (i of innerTextList) {
         i.innerText = defaultText[i.classList[i.classList.length - 1]];
      }

      for (i of innerHTMLList) {
         i.innerHTML = defaultText[i.classList[i.classList.length - 1]];
      }
   }

   languageSwitcher.forEach(element => element.addEventListener('click', (event) => {
      tumbler.forEach(elem => {
         elem.classList.toggle('activate');

         if (elem.classList.contains('activate')) {
            translateRussian();
         } else {
            translateEnglish();
         }
      });
   }));
}