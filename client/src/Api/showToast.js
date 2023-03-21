import { createStandaloneToast } from "@chakra-ui/toast";
const { toast } = createStandaloneToast();
export default function showToast(status, message) {
  toast({
    title: message,
    position: "top-right",
    status: status,
    duration: 4000,
    isClosable: true,
  });
}
