import React, { useState } from "react";

import TerminateAskModal from "../../../Modals/TerminateAskModal";
import TerminateArea from "./TerminateArea";
import ContactList from "./ContactList";

export default function ContractPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isTerminated, setTerminated] = useState(false);
  return (
    <div className="mr-8 bg-blurColor">
      {!isTerminated ? (
        <ContactList
          open={modalOpen}
          setModalOpen={setModalOpen}
          handleTerminate={() => setModalOpen(true)}
          handleViewContact={() => setTerminated(true)}
        />
      ) : (
        <TerminateArea open={modalOpen} setModalOpen={setModalOpen} />
      )}
      <TerminateAskModal
        open={modalOpen}
        setModalOpen={setModalOpen}
        setTerminated={setTerminated}
      />
    </div>
  );
}
