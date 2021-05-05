import { useState } from "react";
import { styled } from "/stitches.config";
import { CardStatus, CardTypes } from "/src/types";

const Text = styled("p", {
  color: "black",
});

const Button = styled("button", {
  margin: "12px",
  width: "100px",
  height: "40px"
});

const PopupOverlay = styled("div", {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0, 0, 0, 0)",
  /* background: ${({ showOverlay }) =>
    showOverlay ? 'rgba(0,0,0,.25)' : 'rgba(0, 0, 0, 0)'}; */
  zIndex: 10000,
});

const Popup = styled("div", {
  position: "absolute",
  backgroundColor: "white",
  width: "100%",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  //margin: "12px"
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
  const onClose = () => setShowPopup(false);

  return (
    <PopupOverlay
      //showOverlay={showOverlay}
      onClick={onClose}
      isOpen
      data-testid="lightbox-overlay"
    >
      <Popup>
        <Text>{name}</Text>
        <div>
          <Button
            onClick={() => {
              setStatus(name, CardStatus.discard);
              onClose();
            }}
          >
            Discard
          </Button>

          {removable && (
            <Button
              onClick={() => {
                setStatus(name, CardStatus.removed);
                onClose();
              }}
            >
              Remove
            </Button>
          )}
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </Popup>
    </PopupOverlay>
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
