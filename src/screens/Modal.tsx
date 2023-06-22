import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const Modall = (props: {
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
  const { isOpen, onClose } = useDisclosure();

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

/*
<Modall>
    {
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Sucessfully Created!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for registering your application. Our team will get back to you
          soon.
        </AlertDescription>
      </Alert>
    }
  </Modall>
*/
