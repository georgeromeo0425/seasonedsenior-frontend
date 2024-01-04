import InputField from "@/components/ui/auth/client/InputField";
import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

const DietaryPreferences = () => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleClose = () => {
    setIsOpenModal(false);
  };
  return (
    <div className="mx-32 my-12">
      <div className="flex justify-center font-bold">
        <p style={{ color: "#282828", fontSize: "28px" }}>
          You have no allergies or dietary preferences
        </p>
      </div>
      <div className="p-32 flex justify-center mt-24">
        <button
          style={{
            borderRadius: "8px",
            background: "#CB5A6F",
            color: "white",
            padding: "12px",
            fontSize: "16px",
            fontWeight: "700",
          }}
          onClick={handleOpenModal}
        >
          Edit Dietary Preferences
        </button>
      </div>
      <Modal
        open={isOpenModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="flex flex-col">
              <p
                className="text font-bold flex justify-center"
                style={{ fontSize: "24px", color: "#282828" }}
              >
                Edit Dietary Restrictions and Preferences
              </p>
              <p
                className="mt-4 flex justify-center"
                style={{ fontSize: "16px", color: "#828282" }}
              >
                Select from the services below to create a care plan
              </p>
            </div>
            <div className="mt-8 ">
              <p
                className="text font-bold flex justify-center"
                style={{ fontSize: "16px", color: "#282828" }}
              >
                What allergies or restrictions does the person have?
              </p>
              <div className="px-36 mt-4">
                <InputField
                  type="text"
                  title="List of Allergies"
                  placholder=""
                  value=""
                  handleChange={handleOpenModal}
                />
              </div>
              <div className="px-36 ,mt-4">
                <InputField
                  type="text"
                  title="Note"
                  placholder=""
                  value=""
                  handleChange={handleOpenModal}
                />
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                className="flex justify-center p-4"
                style={{
                  background: "#F4AAB7",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "16px",
                }}
              >
                Edit Dietary Restriction
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DietaryPreferences;
