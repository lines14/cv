const languageSwitcher = document.querySelectorAll('.switcher');
if (languageSwitcher) {
   const innerTextList = [];
   const innerHTMLList = [];
   const defaultText = {};
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
   innerTextList.push(document.querySelector('.name_span'));
   innerTextList.push(document.querySelector('.phone'));
   innerTextList.push(document.querySelector('.linkedin'));
   innerTextList.push(document.querySelector('.telegram'));
   innerTextList.push(document.querySelector('.email'));
   innerTextList.push(document.querySelector('.selenium_js'));
   innerTextList.push(document.querySelector('.selenium_py'));
   innerTextList.push(document.querySelector('.wdio'));
   innerTextList.push(document.querySelector('.gardeners'));
   innerTextList.push(document.querySelector('.mkruna'));
   innerTextList.push(document.querySelector('.cv'));
   innerTextList.push(document.querySelector('.bot'));
   innerTextList.push(document.querySelector('.postgre'));
   innerTextList.push(document.querySelector('.rsschool'));
   innerTextList.push(document.querySelector('.a1qa_course'));

   innerHTMLList.push(document.querySelector('.summary_text_two'));
   innerHTMLList.push(document.querySelector('.speciality'));
   innerHTMLList.push(document.querySelector('.country'));
   innerHTMLList.push(document.querySelector('.medicine'));
   innerHTMLList.push(document.querySelector('.python'));
   innerHTMLList.push(document.querySelector('.vps'));
   innerHTMLList.push(document.querySelector('.virtualization'));
   innerHTMLList.push(document.querySelector('.automation'));
   innerHTMLList.push(document.querySelector('.functional'));
   innerHTMLList.push(document.querySelector('.regression'));
   innerHTMLList.push(document.querySelector('.ui'));
   innerHTMLList.push(document.querySelector('.sql'));
   innerHTMLList.push(document.querySelector('.api'));

   ((e) => {
      innerTextList.forEach((element) => {
         element.classList[element.classList.length - 1] === 'active' ? defaultText[element.classList[element.classList.length - 2]] = element.innerText : defaultText[element.classList[element.classList.length - 1]] = element.innerText
      });

      innerHTMLList.forEach((element) => {
         element.classList[element.classList.length - 1] === 'active' ? defaultText[element.classList[element.classList.length - 2]] = element.innerHTML : defaultText[element.classList[element.classList.length - 1]] = element.innerHTML
      });
   })();

   (function translateRussian(e) {
      const russianProperty = {
         summary_title: 'Обо мне:',
         skills_title: 'Навыки:',
         projects_title: 'Проекты:',
         education_title: 'Образование:',
         contacts_title: 'Контакты:',
         english_title: 'Английский:',
         age_title: 'Возраст:',
         summary_text_one: 'По образованию профессиональный медик, но я понял, что мир IT мне гораздо ближе. Я начал свой путь с Python, затем в арсенале появились JavaScript и TypeScript.',
         summary_text_two: 'Прошел стажировку по специальности "Автоматизация тестирования" в <span><a class="link a1qa" target="_blank" href="https://www.a1qa.com/">A1QA</a></span> и имею опыт работы в течение 6 месяцев. Я занимаюсь разработкой и непрерывной интеграцией автоматизированных тестов на Node.js и Python, включая тестирование баз данных, REST API и веб-приложений с использованием Selenium WebDriver, Cypress и WebdriverIO.',
         summary_text_three: 'Параллельно практикую выполнение фриланс заказов на парсинг и систематизацию данных с использованием Python, разработку веб-сайтов и создание высоконагруженных асинхронных Telegram-ботов, удаленное администрирование серверов Nginx и Linux.',
         summary_text_four: 'Я не люблю стоять на месте и постоянно учусь. Есть планы освоить еще один объектно-ориентированный язык программирования (Java/C#).',
         summary_text_five: 'В качестве хобби я занимаюсь сборкой и настройкой ПК, катаюсь на горных лыжах, посещаю бары, музыкальные фестивали и концерты.',
         summary_button: 'Обо мне',
         skills_button: 'Навыки',
         projects_button: 'Проекты',
         education_button: 'Образование',
         top_button_mobile: 'Наверх',
         summary_button_mobile: 'Обо мне',
         skills_button_mobile: 'Навыки',
         projects_button_mobile: 'Проекты',
         education_button_mobile: 'Образование',
         name_span: 'Антон Липатов',
         speciality: '<span>Инженер по разработке</span><br><span>ПО в тестировании</span><br><span>(QA автоматизация)</span>',
         country: '<img class="socials" src="./assets/img/pin.png" alt="Pin" width="17" height="17"><a class="link" href="https://www.google.kz/maps/place/Almaty" target="_blank">Казахстан</a><img class="socials flag" src="./assets/img/kz.png" alt="KZ" width="17" height="17">(или удалёнка)',
         phone: '+77478595164',
         linkedin: 'Антон Липатов',
         telegram: 'lines14',
         email: 'lines14.qa@gmail.com',
         medicine: '<img class="socials" src="./assets/img/check.png" alt="Complete" width="16" height="16">Московский медицинский колледж №7 / Российский государственный медицинский университет - Фельдшер скорой медицинской помощи',
         python: '<img class="socials" src="./assets/img/check.png" alt="Complete" width="16" height="16">Московский авиационный институт - Разработка на Python, курс переподготовки',
         vps: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Настройка VPS/VDS серверов',
         virtualization: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Виртуализация',
         automation: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Автоматизация',
         functional: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Функциональные тесты',
         regression: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Регрессионные тесты',
         ui: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">UI тестирование',
         sql: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Тесты баз данных SQL',
         api: '<img class="arrow" src="./assets/img/next.png" alt="Arrow" width="19" height="19">Тестирование REST API',
         selenium_js: 'Node.js AQA тест-фреймворк на базе Selenium WebDriver, Mocha и Chai',
         selenium_py: 'Python AQA тест-фреймворк на базе Selenium WebDriver и Pytest',
         wdio: 'Node.js AQA тест-фреймворк на базе WebdriverIO, Axios, Mocha и Chai',
         gardeners: 'Веб-сайт садоводческой компании (пет-проект)',
         mkruna: 'Веб-сайт компании по анализу данных',
         cv: 'Этот веб-сайт с резюме',
         bot: 'Высоконагруженный Телеграм бот на базе Python и Aiogram с встроенной CRM',
         postgre: 'Средства для удалённой работы с PostgreSQL на Python',
         rsschool: 'RS School - JS/FE Pre-School 2022Q4 JavaScript (ссылка с сертификатом)',
         a1qa_course: 'A1QA Training center - Курс QA автоматизации тестирования (ссылка с сертификатом)',
      }

      innerTextList.forEach((element) => {
         element.classList[element.classList.length - 1] === 'active' ? element.innerText = russianProperty[element.classList[element.classList.length - 2]] : element.innerText = russianProperty[element.classList[element.classList.length - 1]]
      });

      innerHTMLList.forEach((element) => {
         element.classList[element.classList.length - 1] === 'active' ? element.innerHTML = russianProperty[element.classList[element.classList.length - 2]] : element.innerHTML = russianProperty[element.classList[element.classList.length - 1]]
      });
   })();

   const translateEnglish = (e) => {
      innerTextList.forEach((element) => {
         element.classList[element.classList.length - 1] === 'active' ? element.innerText = defaultText[element.classList[element.classList.length - 2]] : element.innerText = defaultText[element.classList[element.classList.length - 1]]
      });

      innerHTMLList.forEach((element) => {
         element.classList[element.classList.length - 1] === 'active' ? element.innerHTML = defaultText[element.classList[element.classList.length - 2]] : element.innerHTML = defaultText[element.classList[element.classList.length - 1]]
      });
   }

   languageSwitcher.forEach((element) => element.addEventListener('click', (event) => {
      tumbler.forEach((elem) => {
         elem.classList.toggle('activate');
         elem.classList.contains('activate') ? translateRussian() : translateEnglish();
      });
   }));
}