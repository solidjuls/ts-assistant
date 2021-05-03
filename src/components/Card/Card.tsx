export enum CardStatus {
  Draft = "DRAFT",
  Removed = "REMOVED",
  Discard = "DISCARD",
}

export interface CardTypes {
  name: string;
  action: () => any;
}

const Card = ({ name, action }: CardTypes) => {
  return <div>{name}</div>;
};

export { Card };
