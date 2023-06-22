import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const Modall = (props: {
  onClose: () => void;
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) => {
  const onClose = props.onClose;

  return (
    <>
      <Modal closeOnOverlayClick={true} isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalBody>
          <ModalContent>{props.children}</ModalContent>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Modall;
