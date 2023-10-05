const demoButtons = document.querySelectorAll('.button-link');
const formSection = document.getElementById('form');

demoButtons.forEach(btn =>
	btn.addEventListener('click', function (event) {
		formSection.scrollIntoView({ behavior: 'smooth' });
	})
);

const form = document.getElementById('my-form');
const overlay = document.querySelector('.overlay');

async function handleSubmit(event) {
	event.preventDefault();
	let data = new FormData(event.target);
	try {
		let response = await fetch(event.target.action, {
			method: form.method,
			body: data,
			headers: {
				Accept: 'application/json',
			},
		});

		if (response.ok) {
			overlay.style.display = 'flex';
			form.reset();
		} else {
			throw new Error('Network response was not ok');
		}
	} catch (error) {
		console.error('Error:', error);
	}
}

form.addEventListener('submit', handleSubmit);

const closeModal = document.querySelector('.my-form-btn');
const close = document.querySelector('.close');

closeModal.addEventListener('click', () => {
	overlay.style.display = 'none';
});

close.addEventListener('click', () => {
	overlay.style.display = 'none';
});

//Change language

const languages = [
	{
		className: 'hero-desc',
		en: 'Set up all marketing activities in one tool',
		ua: 'Налаштовуйте всі маркетингові дії в одному інструменті',
	},
	{
		className: 'but-1',
		en: 'Book a demo',
		ua: 'Замовити демо',
	},
	{
		className: 'but-2',
		en: 'Book a demo',
		ua: 'Замовити демо',
	},
	{
		className: 'but-3',
		en: 'Book a demo',
		ua: 'Замовити демо',
	},
	{
		className: 'but-4',
		en: 'Book a demo',
		ua: 'Замовити демо',
	},
	{
		className: 'but-5',
		en: 'Book a demo',
		ua: 'Замовити демо',
	},
	{
		className: 'but-6',
		en: 'Book a demo',
		ua: 'Замовити демо',
	},
	{
		className: 'but-7',
		en: 'Book a demo',
		ua: 'Замовити демо',
	},
	{
		className: 'about-subtitle',
		en: 'THE DAILY TOOL FOR MARKETERS',
		ua: 'ЩОДЕННИЙ ІНСТРУМЕНТ ДЛЯ ВЗАЄМОДІЇ З КЛІЄНТАМИ',
	},
	{
		className: 'about-text',
		en: 'With Sparta Loyalty System, provide all necessary activities for your marketing department. One system that contains functionalities for running a loyalty program and other marketing activities.',
		ua: 'За допомогою Sparta Loyalty System настроюйте всі необхідні активності вашого відділу маркетингу. Цілісна система, яка поєднує в собі весь функціонал потрібний для запуску програми лояльності та інших маркетингових активностей.',
	},
	{
		className: 'a-1',
		en: 'Track every stage of customer activity to strengthen marketing',
		ua: 'Відстежуйте дії клієнта на кожному етапі його активності, щоб підсилити маркетингові заходи',
	},
	{
		className: 'a-2',
		en: 'Access a 360-degree customer view to understand customers',
		ua: 'Отримайте доступ до всебічного аналізу дій клієнтів, щоб краще їх розуміти',
	},
	{
		className: 'a-3',
		en: 'Segment customers for tailored promotions or communications',
		ua: 'Сегментуйте клієнтів для індивідуальних промо-акцій або комунікацій',
	},
	{
		className: 'a-4',
		en: 'Dedicated promotions to drive customer purchases',
		ua: 'Створюйте спеціальні пропозиції для стимулювання покупок клієнтів',
	},
	{
		className: 'a-5',
		en: 'Personalized communication to engage customers',
		ua: 'Відправляйте персоналізовані повідомлення для якісної взаємодії з клієнтами',
	},
	{
		className: 'a-6',
		en: 'Advanced analytics module for accurate conclusions',
		ua: 'Налаштовуйте якісні звіти для точного аналізу і прийняття рішень',
	},
	{
		className: 'a-7',
		en: 'AI - develop and analyze the system to propose the best offer or email',
		ua: 'Використовуйте АІ для формування якісної комунікації та пропозицій',
	},
	{
		className: 'industries-subtitle',
		en: 'THE DAILY TOOL FOR MARKETERS',
		ua: 'КОМПАНІЇ, ЯКІ ПРОПОНУЮТЬ ТОВАРИ ЧИ ПОСЛУГИ МАСОВОГО СОЖИВАННЯ',
	},
	{
		className: 'b-1',
		en: 'Grocery stores',
		ua: 'Продуктові магазини',
	},
	{
		className: 'b-2',
		en: 'Gas stations',
		ua: 'Мережі заправок',
	},
	{
		className: 'b-3',
		en: 'Pharmacies',
		ua: 'Мережі аптек',
	},
	{
		className: 'b-4',
		en: 'Drugstores',
		ua: 'Магазини косметики',
	},
	{
		className: 'b-5',
		en: 'E-commerce',
		ua: 'Інтернет-магазини',
	},
	{
		className: 'b-6',
		en: 'Logistics',
		ua: 'Логістичні компанії',
	},
	{
		className: 'b-7',
		en: 'Medical facilities',
		ua: 'Медичні заклади',
	},
	{
		className: 'b-8',
		en: 'Hair salons',
		ua: 'Салони краси',
	},
	{
		className: 'b-9',
		en: 'Hypermarkets',
		ua: 'Гіпермаркети',
	},
	{
		className: 'b-10',
		en: 'Shopping centers',
		ua: 'Торгові центри',
	},
	{
		className: 'inside-subtitle-first',
		en: `An elaborate and simple promo tool to create emails, coupons, and marketing materials tailored to each customer's needs.`,
		ua: `ПРОДУМАНИЙ І ПРОСТИЙ ІНСТРУМЕНТ ДЛЯ НАЛАШТУВАННЯ ПРОМО-АКЦІЙ, ЗАОХОЧЕНЬ І РІЗНИХ МАРКЕТИНГОВИХ АКТИВНОСТЕЙ, СТВОРЕНИХ ПІД ПОТРЕБИ КОЖНОГО КЛІЄНТА.`,
	},
	{
		className: 'c-1',
		en: 'Create promotions that surprise customers easily and quickly',
		ua: 'Створюйте акції, які здивують клієнтів легко та швидко',
	},
	{
		className: 'c-2',
		en: 'Various types of promotions: discounts, points, coupons, virtual rewards and lotteries',
		ua: 'Різні види акцій: знижки, бали, купони, винагороди',
	},
	{
		className: 'c-3',
		en: 'Action personalization: by segment, store, region',
		ua: 'Персоналізація дій: за сегментами клієнтів, магазинами, регіонами',
	},
	{
		className: 'c-4',
		en: 'Triggered campaigns: automated campaign triggers',
		ua: 'Тригерні кампанії: автоматичний запуск кампанії після спрацювання тригера',
	},
	{
		className: 'c-5',
		en: 'Online analysis of program effectiveness',
		ua: 'Аналіз ефективності кампаній і налаштованих правил',
	},
	{
		className: 'segment-subtitle',
		en: `Precise customer segmentation to align activities with each customer's needs`,
		ua: `Ретельна сегментація клієнтів для планування активності відповідно до потреб покупця`,
	},
	{
		className: 'd-1',
		en: 'Segment customers based on personal data, geography, and activity',
		ua: 'Сегменти клієнтів на основі персональних даних та їх діях в магазині',
	},
	{
		className: 'd-2',
		en: 'Segments for personalized promotions, email, and analysis',
		ua: 'Сегменти для створення індивідуальний акцій, комунікації та аналізу',
	},
	{
		className: 'd-3',
		en: 'Control groups for AB testing',
		ua: 'Контрольні групи сегментів для проведення А/В тестів',
	},
	{
		className: 'd-4',
		en: 'Building strategies based on RFM indicators',
		ua: 'Побудова стратегії на основі індикаторів RFM',
	},
	{
		className: 'd-5',
		en: 'Customer segmentation based on NPS, LTV, etc',
		ua: 'Сегментація клієнтів на основі показнків NPS, LTV тощо',
	},
	{
		className: 'communication-subtitle',
		en: 'Delivery with individual content to personalize each customer',
		ua: 'Повідомлення з індивідуальним текстом для кожного клієнта',
	},
	{
		className: 'e-1',
		en: 'Utilize a wide range of marketing communication channels',
		ua: 'Використовуйте широкий вибір каналів маркетингових повідомлень',
	},
	{
		className: 'e-2',
		en: 'Receive notifications based on specific conditions',
		ua: 'Надсилайте сповіщення при виконанні певних умов',
	},
	{
		className: 'e-3',
		en: 'Choose from a rich selection of tools for message personalization',
		ua: 'Обирайте широкий вибір інструментів для персоналізації повідомлення',
	},
	{
		className: 'e-4',
		en: 'Set effective filters to determine the frequency of marketing communication',
		ua: 'Скористайтесь фільтрами для настройки частоти відправки повідомлень',
	},
	{
		className: 'e-5',
		en: 'Intuitive message editor',
		ua: 'Створюйте листи клієнтам в зручному редакторі повідомлень',
	},
	{
		className: 'analytics-subtitle',
		en: 'Delivery with individual content to personalize each customer',
		ua: 'Розширена аналітика та AI для маркетингу. Обробляйте накопичені дані, щоб створювати найкращі пропозиції',
	},
	{
		className: 'f-1',
		en: 'Data collection for creating the Next Best Offer',
		ua: 'Збір даних для створення Next Best Offer',
	},
	{
		className: 'f-2',
		en: 'Effectiveness analysis using RFM, NPS, LTV, etc.',
		ua: 'Аналіз ефективності за допомогою RFM, NPS, LTV та ін.',
	},
	{
		className: 'f-3',
		en: 'Customer surveys and analysis of responses',
		ua: 'Опитування клієнтів і аналіз їх відповідей',
	},
	{
		className: 'f-4',
		en: 'Data aggregation on customer activities',
		ua: 'Збір даних про активність клієнтів',
	},
	{
		className: 'f-5',
		en: 'Creation of customer behavior templates',
		ua: 'Створення шаблонів аналізу поведінки клієнтів',
	},
	{
		className: 'f-6',
		en: 'Analysis of product baskets',
		ua: 'Аналіз товарних кошиків клієнтів',
	},
	{
		className: 'f-7',
		en: 'AI for email',
		ua: 'AI для комунікації і пропозицій',
	},
	{
		className: 'contact-subtitle',
		en: `Let's discuss how our system could be utilized in your business`,
		ua: `Давайте поговоримо, як наша система може бути корисною для вашого бізнесу`,
	},
	{
		className: 'case-subtitle',
		en: 'Meet our implementation',
		ua: 'Пару прикладів впроваджень',
	},

	{
		className: 'footer-right-title',
		en: 'CONTACT',
		ua: 'КОНТАКТ',
	},
	{
		className: 'footer-right-text',
		en: 'Spartavity Sp. z o.o. Wadowicka 6, 30-415 Kraków offer@spartavity.com',
		ua: 'Spartavity Sp. z o.o. Вадовіцка 6, 30-415 Краків offer@spartavity.com',
	},
	{
		className: 'my-form-text',
		en: 'for filling up the questionnaire. we will reply as soon as possible',
		ua: 'за заповнення анкети. ми відповімо якнайшвидше',
	},
	{
		className: 'sl-btn-1',
		en: 'Read more',
		ua: 'Детальніше',
	},
	{
		className: 'sl-btn-2',
		en: 'Read more',
		ua: 'Детальніше',
	},
	{
		className: 'sl-btn-3',
		en: 'Read more',
		ua: 'Детальніше',
	},
	{
		className: 'sl-btn-4',
		en: 'Read more',
		ua: 'Детальніше',
	},
	{
		className: 'sl-btn-5',
		en: 'Read more',
		ua: 'Детальніше',
	},
	{
		className: 'sl-btn-6',
		en: 'Read more',
		ua: 'Детальніше',
	},
	{
		className: 'ssb-1',
		en: 'A holistic loyalty platform',
		ua: 'Комплексна платформа лояльності',
	},
	{
		className: 'sst-1',
		en: 'The Sparta Loyalty Platform that was implemented into the LOTOS Navigator Program is a version built individually for the needs of the Navigator loyalty program user.',
		ua: 'Платформа лояльності "Спарта", яка була імплементована в програму "Лотос Навігатор є версією, розробленою індивідуально для під потреби користувача програми лояльності "Навігатор".',
	},
	{
		className: 'ssb-2',
		en: 'Everything at hand',
		ua: 'Все під рукою',
	},
	{
		className: 'sst-2',
		en: 'The Ziko Dermo application and loyalty system is a place where the client has all the most necessary information - she can not only check the latest promotions but also find the nearest drugstore quickly.',
		ua: 'Додаток і система лояльності Ziko Dermo - це місце, де клієнт має всю найнеобхіднішу інформацію - він може не тільки перевірити останні акції, але й швидко знайти найближчу аптеку.',
	},
	{
		className: 'ssb-3',
		en: 'strengthening relationships with clients',
		ua: 'зміцнення відносин з клієнтами',
	},
	{
		className: 'sst-3',
		en: 'The program allow for insight into sales trends and customer preferences and it also creates a medium in which you are able to directly communicate with your customer and improve their overall experience.',
		ua: 'Програма дозволяє зрозуміти тенденції продажів і вподобання клієнтів, а також також створює середовище, в якому ви можете безпосередньо спілкуватися з клієнтами та покращувати їхній загальний досвід.',
	},
	{
		className: 'ssb-4',
		en: 'food, agricultural, financial and industrial services and products',
		ua: 'харчові, сільськогосподарські, фінансові та промислові послуги та продукти',
	},
	{
		className: 'sst-4',
		en: 'Personalized communication (program website, e-mail, sms), attachment to one supplier, detailed reporting of processes in the program. Virtual prize catalogue.',
		ua: 'Персоналізована комунікація (веб-сайт програми, електронна пошта, смс), прив’язка до одного постачальника, детальна звітність про процеси в програмі. Віртуальний каталог призів.',
	},
	{
		className: 'ssb-5',
		en: 'manufacturer of footwear, clothing and sports accessories.',
		ua: 'виробник взуття, одягу та спортивних аксесуарів.',
	},
	{
		className: 'sst-5',
		en: 'The programme works in the omnichannel model – in both physical and online stores. Extensive programme database (personal and transaction data), personalized communication (programme website, e-mail, SMS), detailed process reporting.',
		ua: 'Програма працює в омніканальній моделі - як у фізичних, так і в онлайн-магазинах. Велика база даних програми (персональні дані та дані про транзакції), персоналізована комунікація (веб-сайт програми, електронна пошта, SMS), детальна звітність по процесах.',
	},
	{
		className: 'ssb-6',
		en: 'original, natural and ethical cosmetic brand',
		ua: 'оригінальний, натуральний та етичний косметичний бренд',
	},
	{
		className: 'sst-5',
		en: 'Extensive program database (personal and transaction data), personalized communication (program website, e-mail, SMS, mobile app with e-coupons), detailed process reporting, product category promotion management, network customer lifecycle management.',
		ua: 'Велика база даних програми (персональні дані та дані про транзакції), персоналізована комунікація (веб-сайт програми, електронна пошта, SMS, мобільний додаток з електронними купонами), детальна звітність процесу, управління просуванням товарної категорії, мережа клієнт управління життєвим циклом.',
	},
	{
		className: 'footer-copy',
		en: '© 2023 Spartavity Polityka prywatności',
		ua: '© 2023 Spartavity Політика кофіденційності',
	},
	{
		className: 'span-customer',
		en: `FULL CUSTOMER VIEW`,
		ua: `ПОВНЕ УЯВЛЕННЯ ПРО КЛІЄНТА`,
	},
	{
		className: 'category-span-1',
		en: `VARIOUS TYPES OF PROMOTIONS`,
		ua: `РІЗНІ ВИДИ ПРОМО-АКЦІЙ`,
	},
	{
		className: 'category-span-2',
		en: `SEGMENT CUSTOMERS`,
		ua: `СЕГМЕНТИ КЛІЄНТІВ`,
	},
	{
		className: 'category-span-3',
		en: `CUSTOMER SEGMENTATION`,
		ua: `НАЛАШТУВАННЯ ШАБЛОНІВ ПОВІДОМЛЕННЯ`,
	},
	{
		className: 'category-span-4',
		en: `SEGMENTATION RFM`,
		ua: `СЕГМЕНТАЦІЯ RFM`,
	},
];

const htmlV = [
	{
		className: 'industries-title',
		en: '<h2 class="section-title industries-title"> Who is it <span class="second-color industries-span">useful</span> for? </h2>',
		ua: '<h2 class="section-title industries-title"> Кому <span class="second-color industries-span">це</span> корисно? </h2>',
	},
	{
		className: 'inside-title',
		en: `<h2 class="section-title inside-head inside-title"> What's <span class="second-color inside-span">inside</span> ? </h2>`,
		ua: `<h2 class="section-title inside-head inside-title"> Наші <span class="second-color inside-span">можливості</span> ? </h2>`,
	},
	{
		className: 'contact-title',
		en: `<h2 class="section-title contact-title"> Contact <span class="second-color contact-span">us</span> </h2>`,
		ua: `<h2 class="section-title contact-title"> Давайте <span class="second-color contact-span">знайомитись</span> </h2>`,
	},
	{
		className: 'case-title',
		en: `<h2 class="section-title case-title"> Case <span class="second-color case-span">study</span> </h2>`,
		ua: `<h2 class="section-title case-title"> Наші <span class="second-color case-span">клієнти</span> </h2>`,
	},
	{
		className: 'g-1',
		en: `<h2 class="section-title inside-head my-form-title"> THANK <span class="second-color">YOU</span></h2>`,
		ua: `<h2 class="section-title inside-head my-form-title"> ДЯКУЄМО <span class="second-color">ВАМ</span></h2>`,
	},
	{
		className: 'overlay',
		en: ` <div id="my-form-status">
            <svg class="close" xmlns="http://www.w3.org/2000/svg" width="91" height="91" viewBox="0 0 91 91"
              fill="none">
              <path
                d="M24.2663 72.0413L18.958 66.733L40.1913 45.4997L18.958 24.2663L24.2663 18.958L45.4997 40.1913L66.733 18.958L72.0413 24.2663L50.808 45.4997L72.0413 66.733L66.733 72.0413L45.4997 50.808L24.2663 72.0413Z"
                fill="white" />
            </svg>
            <h2 class="section-title inside-head my-form-title">
              THANK
              <span class="second-color">YOU</span>
            </h2>
            <p class="my-form-text">for filling up the questionnaire.<br></br>
              we will reply as soon as possible</p>
            <button class="my-form-btn">Close</button>
          </div>`,
		ua: ` <div id="my-form-status">
            <svg class="close" xmlns="http://www.w3.org/2000/svg" width="91" height="91" viewBox="0 0 91 91"
              fill="none">
              <path
                d="M24.2663 72.0413L18.958 66.733L40.1913 45.4997L18.958 24.2663L24.2663 18.958L45.4997 40.1913L66.733 18.958L72.0413 24.2663L50.808 45.4997L72.0413 66.733L66.733 72.0413L45.4997 50.808L24.2663 72.0413Z"
                fill="white" />
            </svg>
            <h2 class="section-title inside-head my-form-title">
              ДЯКУЄМО
              <span class="second-color">ВАМ</span>
            </h2>
            <p class="my-form-text">за заповнення анкети.<br></br> ми відповімо якнайшвидше</p>
            <button class="my-form-btn">Закрити</button>
          </div>`,
	},
	{
		className: 'formus',
		en: '<div class="form-flex"> <div class="form-img"> <img class="contact-envelope" src="./images/form.png" alt="Envelope"> </div> <div class="form"><div> <label class="form-label g-1">Name</label> <input class="form-input g-1-1" name="username" type="text" placeholder="Name" required></div> <div> <label class="form-label g-2">Last Name</label> <input class="form-input g-2-2" type="text" name="lastname" placeholder="Last Name"></div><div> <label class="form-label">E-mail</label> <input class="form-input" type="email" name="email" placeholder="E-mail" required></div><div> <label class="form-label g-3">Message</label> <textarea class="form-textarea g-3-3" name="message" placeholder="Your message" required></textarea></div><div style="display: flex; align-items: flex-start; gap: 1rem;"> <input class="form-checkbox" type="checkbox" required> <p class="form-text">The administrator of your personal data is Spartavity Sp. z o. o. in Krakow (ul. Wadowicka 6). Detailed information on the processing of personal data can be found in the <a class="policy" href="https://spartavity.pl/en/privacy-policy">privacy policy</a>.</p> </div></div></div><button class="button button-second form-btn">Send</button>',
		ua: '<div class="form-flex"> <div class="form-img"> <img class="contact-envelope" src="./images/form.png" alt="Envelope"> </div> <div class="form"><div> <label class="form-label g-1">Ім’я</label> <input class="form-input g-1-1" name="username" type="text" placeholder="Ім’я" required></div> <div> <label class="form-label g-2">Прізвище</label> <input class="form-input g-2-2" type="text" name="lastname" placeholder="Прізвище"></div><div> <label class="form-label">E-mail</label> <input class="form-input" type="email" name="email" placeholder="E-mail" required></div><div> <label class="form-label g-3">Як можемо бути корисні?</label> <textarea class="form-textarea g-3-3" name="message" placeholder="Опишіть в двух словах про що Ви хотіли би поговорити" required></textarea></div><div style="display: flex; align-items: flex-start; gap: 1rem;"> <input class="form-checkbox" type="checkbox" required> <p class="form-text">Адміністратором ваших персональних даних є Spartavity Sp. z o. o. у Кракові (вул. Вадовицька 6). Детальну інформацію про обробку персональних даних можна можна знайти в <a class="policy" href="https://spartavity.pl/en/privacy-policy">політиці конфіденційності</a>.</p> </div></div></div><button class="button button-second form-btn">Надіслати</button>',
	},
];

document.getElementById('enBtn').addEventListener('click', function () {
	document.getElementById('uaBtn').classList.add('active-btn');
	document.getElementById('enBtn').classList.remove('active-btn');
	changeLanguage('ua');
});

document.getElementById('uaBtn').addEventListener('click', function () {
	document.getElementById('enBtn').classList.add('active-btn');
	document.getElementById('uaBtn').classList.remove('active-btn');
	changeLanguage('en');
});

const changeLanguage = lang => {
	languages.forEach(language => {
		const elem = document.querySelector(`.${language.className}`);
		if (elem) {
			if (lang === 'en') {
				elem.textContent = `${language.en}`;
			} else {
				elem.textContent = `${language.ua}`;
			}
		}
	});
	htmlV.forEach(v => {
		const element = document.querySelector(`.${v.className}`);
		if (element) {
			if (lang === 'en') {
				element.innerHTML = `${v.en}`;
			} else {
				element.innerHTML = `${v.ua}`;
			}
		}
		const closeModal = document.querySelector('.my-form-btn');
		const close = document.querySelector('.close');

		closeModal.addEventListener('click', () => {
			overlay.style.display = 'none';
		});

		close.addEventListener('click', () => {
			overlay.style.display = 'none';
		});
	});
};

// logos slider //

const logos = document.querySelectorAll('.about-logo-item');
let currentIndex = 0;

function showSlide(index, numToShow) {
	for (let i = 0; i < logos.length; i++) {
		logos[i].style.display =
			i >= index && i < index + numToShow ? 'block' : 'none';
	}
}

function nextSlide(numToShow) {
	currentIndex = (currentIndex + numToShow) % logos.length;
	showSlide(currentIndex, numToShow);
}

if (screen.width <= 850 && screen.width >= 480) {
	const numToShow = 3;
	showSlide(currentIndex, numToShow);
	setInterval(() => nextSlide(numToShow), 3000);
}

if (screen.width < 480) {
	function hideAllSlides() {
		for (let i = 0; i < logos.length; i++) {
			logos[i].style.display = 'none';
		}
	}

	const numToShow = 1;
	hideAllSlides();
	setTimeout(() => {
		nextSlide(numToShow);
		setInterval(() => nextSlide(numToShow), 1500);
	}, 1500);
}

// case slider

const changeSlide = () => {
	let currentSlide = 0;
	let slideInterval;

	// Функция для переключения слайдов
	function showSlide(index) {
		const slides = document.querySelectorAll('.slider-container');
		const navItems = document.querySelectorAll('.slider-nav div');

		slides.forEach((slide, i) => {
			if (i === index) {
				slide.classList.add('active-slide');
				navItems[i].classList.add('active-nav');
			} else {
				slide.classList.remove('active-slide');
				navItems[i].classList.remove('active-nav');
			}
		});
	}

	// Функция для автоматического переключения слайдов каждые 3 секунды
	function autoSlide() {
		currentSlide = (currentSlide + 1) % 6; // Общее количество слайдов
		showSlide(currentSlide);
	}

	// Начать автоматическое переключение слайдов
	slideInterval = setInterval(autoSlide, 3000);

	// Обработчики событий для навигации
	const navItems = document.querySelectorAll('.slider-nav div');

	navItems.forEach((navItem, index) => {
		navItem.addEventListener('click', function () {
			clearInterval(slideInterval); // Остановить автоматическое переключение
			currentSlide = index;
			showSlide(currentSlide);
			slideInterval = setInterval(autoSlide, 3000); // Запустить автоматическое переключение снова
		});
	});
};

changeSlide();
