export interface ArchiveItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  images: string[];
}

const archiveItems: ArchiveItem[] = [
  {
    id: 'boxing-club',
    title: 'Boxing Club',
    image: '/pics/boxing-02.jpeg',
    alt: 'Boxer training on a punching bag',
    images: [
      '/pics/boxing-02.jpeg',
      '/pics/boxing-03.jpeg',
      '/pics/boxing-05.jpeg',
      '/pics/boxing-08.jpeg',
      '/pics/boxing-11.jpeg',
      '/pics/boxing-12.jpeg',
      '/pics/boxing-13.jpeg',
      '/pics/boxing-14.jpeg',
      '/pics/boxing-15.jpeg',
      '/pics/boxing-16.jpeg',
      '/pics/boxing-18.jpeg',
    ],
  },
  {
    id: 'sparring-sessie',
    title: 'Sparring Sessie',
    image: '/pics/boxing-04.jpeg',
    alt: 'Two boxers sparring in the gym',
    images: [
      '/pics/boxing-01.jpeg',
      '/pics/boxing-04.jpeg',
      '/pics/boxing-06.jpeg',
      '/pics/boxing-07.jpeg',
      '/pics/boxing-09.jpeg',
      '/pics/boxing-10.jpeg',
      '/pics/boxing-17.jpeg',
      '/pics/boxing-19.jpeg',
      '/pics/boxing-20.jpeg',
    ],
  },
  {
    id: 'model-1-darra',
    title: 'Model 1: Darra',
    image: '/pics/darra.jpeg',
    alt: 'Darra portrait',
    images: [
      '/pics/darra.jpeg',
      '/pics/darra1.jpeg',
      '/pics/boxing-01.jpeg',
      '/pics/boxing-06.jpeg',
      '/pics/boxing-07.jpeg',
      '/pics/boxing-09.jpeg',
      '/pics/boxing-10.jpeg',
    ],
  },
  {
    id: 'model-2-noah',
    title: 'Model 2: Noah',
    image: '/pics/handstand.jpeg',
    alt: 'Noah performing a handstand',
    images: [
      '/pics/Noah2.jpeg',
      '/pics/handstand.jpeg',
      '/pics/rummikub.jpeg',
      '/pics/shared-image.jpeg',
      '/pics/shared-image-1.jpeg',
    ],
  },
  {
    id: 'game-night',
    title: 'Game Night',
    image: '/pics/rummikub.jpeg',
    alt: 'Playing Rummikub on game night',
    images: [
      '/pics/rummikub.jpeg',
      '/pics/shared-image.jpeg',
      '/pics/shared-image-1.jpeg',
    ],
  },
  {
    id: 'im-gianni',
    title: "I'm Gianni",
    image: '/pics/Giannipic2.jpg',
    alt: 'This is me',
    images: ['/pics/Giannipic2.jpg', '/pics/don_gianni.png'],
  },
  {
    id: 'lukk-dj',
    title: 'Lukk the DJ',
    image: '/pics/lukk-dj-01.jpg',
    alt: 'Lukk performing as a DJ',
    images: [
      '/pics/lukk-dj-01.jpg',
      '/pics/lukk-dj-02.jpg',
      '/pics/lukk-dj-03.jpg',
      '/pics/lukk-dj-04.jpg',
      '/pics/lukk-dj-05.jpg',
      '/pics/lukk-dj-06.jpg',
      '/pics/lukk-dj-07.jpg',
      '/pics/lukk-dj-08.jpg',
      '/pics/lukk-dj-09.jpg',
      '/pics/lukk-dj-10.jpg',
      '/pics/lukk-dj-11.jpg',
      '/pics/lukk-dj-12.jpg',
      '/pics/lukk-dj-13.jpg',
      '/pics/lukk-dj-14.jpg',
    ],
  },
];

export default archiveItems;
