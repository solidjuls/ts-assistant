export enum CardStatus {
  china = "CHINA",
  draft = "DRAFT",
  removed = "REMOVED",
  discard = "DISCARD",
}

export enum GameStage {
  earlyWar = "EARLYWAR",
  midWar = "MIDWAR",
  lateWar = "LATEWAR",
}

export interface CardTypes {
  name: string;
  action: () => any;
  setStatus: (p: CardStatus) => void;
}
