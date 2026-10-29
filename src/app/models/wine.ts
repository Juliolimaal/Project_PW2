export interface Wine {
  id: string;
  name: string;
  category: 'Tinto' | 'Branco' | 'Rosé' | string;
  description: string;
  price: number;
  image: string;
}

export const demoWines: Wine[] = [
  {
    id: 'alesia-tinto',
    name: 'Alesia Tinto',
    category: 'Tinto',
    description: 'Vinho tinto de perfil marcante, para acompanhar refeições e encontros especiais.',
    price: 89.9,
    image: '/images/image-wine-red-alesia.png'
  },
  {
    id: 'larnache-tinto',
    name: 'Larnache Tinto',
    category: 'Tinto',
    description: 'Um tinto equilibrado, com aromas de frutas maduras e final agradável.',
    price: 109.9,
    image: '/images/image-wine-red-larnache.png'
  },
  {
    id: 'vitalo-tinto',
    name: 'Vitalo Tinto',
    category: 'Tinto',
    description: 'Rótulo encorpado para quem prefere sabores intensos e persistentes.',
    price: 129.9,
    image: '/images/image-wine-red-vitalo.png'
  },
  {
    id: 'fresh-rose',
    name: 'Fresh Rosé',
    category: 'Rosé',
    description: 'Rosé leve e refrescante para servir em momentos descontraídos.',
    price: 79.9,
    image: '/images/image-wine-da-luz.png'
  },
  {
    id: 'rose-da-luz',
    name: 'Rosé da Luz',
    category: 'Rosé',
    description: 'Notas delicadas e frescor que combinam com dias mais leves.',
    price: 94.9,
    image: '/images/image-wine-fresh-rose.png'
  },
  {
    id: 'da-luz-branco',
    name: 'Da Luz Branco',
    category: 'Branco',
    description: 'Vinho branco aromático, com acidez equilibrada e boa companhia à mesa.',
    price: 99.9,
    image: '/images/image-wine-white-copy.png'
  }
];