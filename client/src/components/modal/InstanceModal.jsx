import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function InstanceModal(props) {
  const { show, hide, modalName, content } = props;
  return (
    <Modal
      isOpen={show}
      onClose={hide}
      size={modalName === "Xác Nhận" ? "lg" : "5xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalName ? modalName : null}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{content ? content : null}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default InstanceModal;
