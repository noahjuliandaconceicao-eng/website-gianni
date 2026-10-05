export interface Project {
  id: string;
  title: string;
  category: string[];
  image: string;
  alt: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 'boxing-club',
    title: 'Boxing Club',
    category: ['photography'],
    image: '/pics/boxing-02.jpeg',
    alt: 'Boxer training on a punching bag',
    year: '2026',
  },
  {
    id: 'darra-portrait',
    title: 'Darra Portrait',
    category: ['photography', 'art-direction'],
    image: '/pics/darra.jpeg',
    alt: 'Portrait photography of Darra',
    year: '2024',
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    category: ['photography'],
    image: '/pics/darra1.jpeg',
    alt: 'Golden hour portrait',
    year: '2024',
  },
  {
    id: 'ringside',
    title: 'Ringside',
    category: ['photography', 'art-direction'],
    image: '/pics/boxing-13.jpeg',
    alt: 'Boxer facing the camera between rounds',
    year: '2026',
  },
  {
    id: 'sparring-session',
    title: 'Sparring Session',
    category: ['photography'],
    image: '/pics/boxing-04.jpeg',
    alt: 'Two boxers sparring in the gym',
    year: '2026',
  },
  {
    id: 'handstand',
    title: 'Movement Study',
    category: ['photography'],
    image: '/pics/handstand.jpeg',
    alt: 'Movement and handstand photography',
    year: '2023',
  },
  {
    id: 'shared-moments',
    title: 'Shared Moments',
    category: ['photography'],
    image: '/pics/shared-image.jpeg',
    alt: 'Shared moments photography',
    year: '2023',
  },
  {
    id: 'rummikub-nights',
    title: 'Rummikub Nights',
    category: ['photography'],
    image: '/pics/rummikub.jpeg',
    alt: 'Rummikub game night',
    year: '2023',
  },
  {
    id: 'urban-landscapes',
    title: 'Urban Landscapes',
    category: ['photography', 'art-direction'],
    image: '/pics/shared-image-1.jpeg',
    alt: 'Urban landscape photography',
    year: '2023',
  },
  {
    id: 'wanderlust',
    title: 'Wanderlust',
    category: ['photography'],
    image: '/pics/shared-image-2.jpeg',
    alt: 'Travel photography',
    year: '2023',
  },
  {
    id: 'lukk-the-dj',
    title: 'Lukk the DJ',
    category: ['photography'],
    image: '/pics/lukk-dj-01.jpg',
    alt: 'Lukk performing as a DJ',
    year: '2026',
  },
];

export default projects;
