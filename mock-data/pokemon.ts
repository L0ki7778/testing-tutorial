export const POKEMON: PokemonJSON = {
  1: { name: 'Bisasam', type: 'grass' },
  2: { name: 'Glumanda', type: 'fire' },
  3: { name: 'Schiggy', type: 'water' },
  4: { name: 'Pikachu', type: 'electric' },
  5: { name: 'Raupy', type: 'bug' },
  6: { name: 'Hornliu', type: 'bug' },
  7: { name: 'Taubsi', type: 'normal' },
  8: { name: 'Rattfratz', type: 'normal' },
  9: { name: 'Habitak', type: 'normal' },
  10: { name: 'Sandan', type: 'ground' },
  11: { name: 'Vulpix', type: 'fire' },
  12: { name: 'Zubat', type: 'poison' },
  13: { name: 'Paras', type: 'bug' },
  14: { name: 'Bluzuk', type: 'bug' },
  15: { name: 'Digda', type: 'ground' },
  16: { name: 'Mauzi', type: 'normal' },
  17: { name: 'Enton', type: 'water' },
  18: { name: 'Menki', type: 'fighting' },
  19: { name: 'Abra', type: 'psychic' },
  20: { name: 'Machollo', type: 'fighting' }
};

export interface PokemonJSON {
  [id: number]: {
    name: string;
    type: string;
  };
};

export interface Pokemon {
  name: string;
  type: string;
};
