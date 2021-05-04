export enum CardStatus {
  china = "CHINA",
  draft = "DRAFT",
  removed = "REMOVED",
  discard = "DISCARD",
}

export interface CardTypes {
  name: string;
  action: () => any;
  setStatus: (p: CardStatus) => void;
}
