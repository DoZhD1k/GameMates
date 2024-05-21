// types.ts
export interface Game {
  ranks: string[];
  game_mods: string[];
}

export interface GameFiltersProps {
  game: Game | null;
  setFilters: (filters: any) => void; // Типизируйте filters в зависимости от вашей логики
}
