import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

export function ExModal(props: any) {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Mensagem</ModalHeader>
          <ModalCloseButton />
          <ModalBody>E-mail enviado com sucesso !</ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={props.onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
