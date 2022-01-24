import { Article } from './article';

export enum ButtonText {
  BUTTON_SHOW = 'читать статью полностью',
  BUTTON_HIDE = 'скрыть статью',
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Механизм управления расплодом',
    headline:
      'Ветеран отечественного пчеловодства М.И. Миленин рассказал читателям «Мира пчеловодства» о разработанных им технологиях ухода за пчелиными семьями.',
    body: 'Подготовленное весеннее поколение с повышенной продуктивностью (10-12 баллов) и жизнеспособностью до 6 месяцев («спецназ») после очистки от клеща получением трутневого молочка целесообразно использовать на заготовке кормов до окончания сезона. Окрепшее, с развитой эндокринной системой, прошедшее естественный отбор поколение в конце лета, после отбора медовых накоплений, должно воспитать смену к условиям зимнего периода с достаточным жировым телом, с неиспользованными молочными железами, не требующую излишнего расхода кормовых запасов, со среднесуточным потреблением мёда в пределах 10-15 гр. для регулирования газового режима.',
    img: 'https://opt-1494236.ssl.1c-bitrix-cdn.ru/upload/iblock/0fd/0fd18231d3d3c137d2adf052e09dbe51.jpg?1599139833567707',
    author: 'Миленин М.И.',
    isVisible: false,
    buttonText: ButtonText.BUTTON_SHOW,
    viewCounterArticle: 0,
  },
  {
    id: 2,
    title: 'Новая линейка подкормок для пчел СтандартЛайт и ПрофиЛайт',
    headline:
      'Качественное питание – залог здоровья. Данное утверждение одинаково справедливо как для человека, так и для пчелы. Для пчелы качественным питанием является нектар и пыльца растений. Но не всегда естественные корма для пчел доступны, а мед может решить все задачи.',
    body: '«Передовая пасека» разработала линейку кормов для пчел на основе инвертированного сиропа с различным составом сахаров и содержанием экстрактов растений и цветочной пыльцы, позволяющей пчеловоду решать конкретные задачи и несколько задач одновременно.',
    img: 'https://www.apiworld.ru/praktika/05_05_2017_3b.jpg',
    author: 'Савин М.И.',
    isVisible: false,
    buttonText: ButtonText.BUTTON_SHOW,
    viewCounterArticle: 0,
  },
  {
    id: 3,
    title: 'Белковые подкормки для пчел из сине-зеленых водорослей',
    headline:
      'В США начаты полевые исследования в области использования сине-зеленых водорослей в качестве белковой подкорки для медоносных пчел.',
    body: 'Потеря естественной среды обитания, уменьшение разнообразия цветковых растений, выращивание одной культуры на большой площади (монокультура) и другие факторы существенно ограничили доступ медоносных пчел к их естественному белковому корму - цветочной пыльце. Нехватка этого сбалансированного корма считается одной из причин ослабления и гибели пчелиных семей в странах с развитым сельским хозяйством.',
    img: 'https://opt-1494236.ssl.1c-bitrix-cdn.ru/upload/iblock/a6f/a6f83ead4649649502811e99eeebadf8.jpg?1589793819393394',
    author: 'Пономарев А.А.',
    isVisible: false,
    buttonText: ButtonText.BUTTON_SHOW,
    viewCounterArticle: 0,
  },
];
