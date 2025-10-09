import React, { useRef } from 'react';

const DialogBox = () => {
  const dialogRef = useRef();

  const openDialog = () => dialogRef.current.showModal();
  const closeDialog = () => dialogRef.current.close();

  return (
    <>
      <dialog ref={dialogRef}>
        <p>Je suis une boîte de dialogue native</p>
        <button onClick={closeDialog}>Fermer</button>
      </dialog>
      <button onClick={openDialog}>Ouvrir le dialogue</button>
    </>
  );
};

export default DialogBox;
