// types.ts
export interface Game {
  id: number;
  name: string;
  image: string;
  tags: GameTag;
  ranks: string[];
  game_mods: string[];
}

export type GameTag =
  | "Strategy MOBA"
  | "FPS"
  | "Shooter Battle-Royale"
  | "Sandbox"
  | "Action-adventure"
  | "Action Simulation"
  | "Indie Simulation"
  | "Survival Horror"
  | "Arcade"
  | "FPS Action"
  | "Casual Indie"
  | "We are still adding games";
