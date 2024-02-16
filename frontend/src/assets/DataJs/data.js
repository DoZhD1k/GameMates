import amongus_img from "../Images/amongus.jpg";
import CoDmw2_img from "../Images/CoDmw2.jpg";
import cs2_img from "../Images/cs2.png";
import DbD_img from "../Images/DbD.jpg";
import destiny_img from "../Images/destiny2.jpg";
import dota2_img from "../Images/dota2.png";
import FallGuys_img from "../Images/FallGuys.png";
import fortnite_img from "../Images/fortnite.jpg";
import gta_img from "../Images/gta.jpg";
import L4D2_img from "../Images/L4D2.jpg";
import minecraft_img from "../Images/minecraft.jpg";
import overwatch_img from "../Images/overwatch.png";
import phasmophobia_img from "../Images/phasmophobia.jpg";
import pubg_img from "../Images/pubg.png";
import Rainbow6_img from "../Images/Rainbow6.jpg";
import roblox_img from "../Images/roblox.jpg";
import rust_img from "../Images/rust.jpg";
import StardewValley_img from "../Images/StardewValley.jpg";
import valorant_img from "../Images/valorant.png";
import WarThunder_img from "../Images/WarThunder.jpg";
import warzone_img from "../Images/warzone.jpg";
import WoT_img from "../Images/WoT.jpg";
import soon_img from "../Images/soon.jpg";

let games_grid = [
  {
    id: 1,
    name: "Dota 2",
    image: dota2_img,
    tags: "Strategy MOBA",
    ranks: [
      "Herald",
      "Guardian",
      "Crusader",
      "Archon",
      "Legend",
      "Ancient",
      "Divine",
      "Immortal",
    ],
    game_mods: [
      "All Pick",
      "Captains Mode",
      "Random Draft",
      "Single Draft",
      "All Random",
      "Ability Draft",
      "Turbo Mode",
      "Ranked Matchmaking",
    ],
  },
  {
    id: 2,
    name: "Counter Strike 2",
    image: cs2_img,
    tags: "FPS",
    ranks: ["Silver", "Global"],
    game_mods: ["Ranked", "Death Match"],
  },
  {
    id: 3,
    name: "Valorant",
    image: valorant_img,
    tags: "FPS",
    ranks: [
      "Iron",
      "Bronze",
      "Silver",
      "Gold",
      "Platinum",
      "Diamond",
      "Ascendant",
      "Immortal",
      "Radiant",
    ],
    game_mods: [
      "Unrated",
      "Ranked",
      "Spike Rush",
      "Deathmatch",
      "Team Deathmatch",
      "Escalation",
    ],
  },
  {
    id: 4,
    name: "Fortnite",
    image: fortnite_img,
    tags: "Shooter Battle-Royale",
    ranks: ["Iron", "Bronze", "Silver", "Gold", "Platinum"],
    game_mods: ["Battle Royale", "Zero Build", "LTMs"],
  },
  {
    id: 5,
    name: "Minecraft",
    image: minecraft_img,
    tags: "Sandbox",
    ranks: ["No ranks"],
    game_mods: ["Server", "Hard Core", "Survival"],
  },
  {
    id: 6,
    name: "Grand Theft Auto V",
    image: gta_img,
    tags: "Action-adventure",
    ranks: ["No ranks"],
    game_mods: ["Online"],
  },
  {
    id: 7,
    name: "PUBG: Battlegrounds",
    image: pubg_img,
    tags: "Shooter Battle-Royale",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 8,
    name: "Overwatch 2",
    image: overwatch_img,
    tags: "FPS",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 9,
    name: "World of Tanks",
    image: WoT_img,
    tags: "Action Simulation",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 10,
    name: "Call of Duty: Warzone",
    image: warzone_img,
    tags: "Shooter Battle-Royale",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 11,
    name: "War Thunder",
    image: WarThunder_img,
    tags: "Action Simulation",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 12,
    name: "Stardew Valley",
    image: StardewValley_img,
    tags: "Indie Simulation",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 13,
    name: "Rust",
    image: rust_img,
    tags: "Action-adventure Shooter",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 14,
    name: "Roblox",
    image: roblox_img,
    tags: "Simulation",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 15,
    name: "Tom Clancy's Rainbow Six Siege",
    image: Rainbow6_img,
    tags: "FPS",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 16,
    name: "Phasmophobia",
    image: phasmophobia_img,
    tags: "Survival Horror",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 17,
    name: "Left 4 Dead 2",
    image: L4D2_img,
    tags: "FPS Horror",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 18,
    name: "Fall Guys",
    image: FallGuys_img,
    tags: "Arcade",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 19,
    name: "Destiny 2",
    image: destiny_img,
    tags: "FPS Action",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 20,
    name: "Dead by Daylight",
    image: DbD_img,
    tags: "Survival Horror",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 21,
    name: "Call of Duty: Modern Warfare II",
    image: CoDmw2_img,
    tags: "FPS",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 22,
    name: "Among Us",
    image: amongus_img,
    tags: "Casual Indie",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
  {
    id: 99999999,
    name: "Comming soon",
    image: soon_img,
    tags: "We are still adding games",
    ranks: ["Ranks"],
    game_mods: ["Online"],
  },
];

export default games_grid;
