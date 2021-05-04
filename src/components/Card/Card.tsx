import { useState } from "react";
import { styled } from "/stitches.config";
import { CardStatus, CardTypes } from "/src/types";

const Text = styled("p", {
  color: "black",
});

const Button = styled("button", {});

const Popup = styled("div", {
  position: "absolute",
  backgroundColor: "white",
  width: "100px",
  height: "100px",
});

const ConfirmationPopup = ({
  name,
  removable,
  setShowPopup,
  setStatus,
}: {
  name: string;
  removable: boolean;
  setShowPopup: (p: boolean) => void;
  setStatus: (p: string, c: CardStatus) => void;
}) => {
  return (
    <Popup>
      <Button
        onClick={() => {
          setStatus(name, CardStatus.Discard);
          setShowPopup(false);
        }}
      >
        Discard
      </Button>

      {removable && (
        <Button
          onClick={() => {
            setStatus(name, CardStatus.Removed);
            setShowPopup(false);
          }}
        >
          Remove
        </Button>
      )}
      <Button onClick={() => setShowPopup(false)}>Cancel</Button>
    </Popup>
  );
};
// click -> pop up with discard/remove/cancel
const Card = ({ name, removable, setStatus, action }: CardTypes) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <>
      {showPopup && (
        <ConfirmationPopup
          name={name}
          removable={removable}
          setStatus={setStatus}
          setShowPopup={setShowPopup}
        />
      )}
      <Text onClick={() => setShowPopup(true)}>{name}</Text>
    </>
  );
};

export { Card };
