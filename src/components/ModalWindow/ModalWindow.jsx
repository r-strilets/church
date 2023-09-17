import { createPortal } from "react-dom";
import { useEffect } from "react";

import { AiOutlineClose } from "react-icons/ai";
import {
  ModalBackdrop,
  ModalBox,
  ModalCloseBtn,
  ModalTitle,
  List,
  ListItem,
  ListItemTitle,
  ListItemText,
} from "./ModalWindow.styled";

export const ModalWindow = ({ closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 27 || e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalBox>
        <ModalCloseBtn onClick={closeModal}>
          <AiOutlineClose style={{ width: "20px", height: "100%" }} />
        </ModalCloseBtn>
        <div>
          <ModalTitle>Реквізити для добровільних пожертвувань</ModalTitle>
          <List>
            <ListItem>
              <ListItemTitle>у гривні </ListItemTitle>
              <ListItemText>
                Релігійна громада Церкви Ісуса Назарянина м. Вінниця
                <br />
                <b>
                  ЗКПО 26176185 Р/р UA673510050000026006660040500 МФО 351005 АТ
                  «УКРСИББАНК».
                </b>
                <br />
                Призначення платежу обов'язкове: «Добровільні пожертвування»
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemTitle>у євровалюті</ListItemTitle>
              <ListItemText>
                Relihiina hromada TSerkvy Isusa Nazarianyna V m.Vinnytsi <br />
                <b>
                  26176185 UA423510050000026007878809866 JOINT STOCK COMPANY
                  “UKRSIBBANK”.
                </b>
                <br />
                Призначення платежу обов'язкове: «Добровільні пожертвування»
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemTitle>у доларовій валюті</ListItemTitle>
              <ListItemText>
                Relihiina hromada TSerkvy Isusa Nazarianyna V m.Vinnytsi <br />
                <b>
                  26176185 UA273510050000026007879184847 JOINT STOCK COMPANY
                  “UKRSIBBANK”.
                </b>
                <br />
                Призначення платежу обов'язкове: «Добровільні пожертвування»
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </ModalBox>
    </ModalBackdrop>,
    document.getElementById("modal-root")
  );
};
