/**
 * Local copies of stills from the official gallery:
 * https://roadtovostok.com/screenshots
 */
export default [
  {
    file: 'Road_to_Vostok_Screenshot_01.jpg',
    alt: 'Road To Vostok — snowy landscape and survival atmosphere (official screenshot 1)',
  },
  {
    file: 'Road_to_Vostok_Screenshot_02.jpg',
    alt: 'Road To Vostok — interior or combat scene (official screenshot 2)',
  },
  {
    file: 'Road_to_Vostok_Screenshot_03.jpg',
    alt: 'Road To Vostok — border-zone tension (official screenshot 3)',
  },
  {
    file: 'Road_to_Vostok_Screenshot_04.jpg',
    alt: 'Road To Vostok — exploration moment (official screenshot 4)',
  },
  {
    file: 'Road_to_Vostok_Screenshot_05.jpg',
    alt: 'Road To Vostok — shelter or staging area (official screenshot 5)',
  },
  {
    file: 'Road_to_Vostok_Screenshot_06.jpg',
    alt: 'Road To Vostok — weather and visibility (official screenshot 6)',
  },
  {
    file: 'Road_to_Vostok_Screenshot_07.jpg',
    alt: 'Road To Vostok — firefight or encounter (official screenshot 7)',
  },
  {
    file: 'Road_to_Vostok_Screenshot_08.jpg',
    alt: 'Road To Vostok — rural Finland–border mood (official screenshot 8)',
  },
  {
    file: 'Road_to_Vostok_Screenshot_09.jpg',
    alt: 'Road To Vostok — loot and survival loop (official screenshot 9)',
  },
  {
    file: 'Road_to_Vostok_Screenshot_10.jpg',
    alt: 'Road To Vostok — night or low-light scene (official screenshot 10)',
  },
  {
    file: 'Road_to_Vostok_Screenshot_11.jpg',
    alt: 'Road To Vostok — traversal or map travel (official screenshot 11)',
  },
  {
    file: 'Road_to_Vostok_Screenshot_12.jpg',
    alt: 'Road To Vostok — Vostok or late-game tension (official screenshot 12)',
  },
].map((row, i) => ({
  ...row,
  index: i + 1,
  src: `/images/poster/${row.file}`,
}))
