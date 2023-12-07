import { Box, Button, Center, Divider, HStack, Icon, Pressable, Stack, Text } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { currencyFormat, formatDate } from "../utils/Utils";

export default function InvoiceCard({ invoice, handleInvoiceDetails }) {
  return (
    <Box padding={3} alignItems="center">
      <Box
        w="100%"
        rounded="lg"
        mb={3}
        borderRadius={20}
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _light={{
          backgroundColor: "white",
        }}
      >
        <Stack p="4">
          <Pressable>
            <Stack>
              <Box>
                <Text fontWeight="bold">{invoice.invoiceNumber}</Text>
                <Text color="gray.500">
                  {formatDate(invoice.date)}
                </Text>
              </Box>
            </Stack>
            <HStack alignItems="center" justifyContent="space-between">
              <HStack alignItems="center">
                <Box>
                  <Text color="gray.500">Cliente: {invoice.client}</Text>
                  <Text color="gray.500">
                    Descrição:{" "}
                    {invoice.description ? invoice.description : " - "}
                  </Text>
                  <Text color="gray.500">
                    Total:{" "}
                    {currencyFormat(invoice.total)}
                  </Text>
                </Box>
              </HStack>
            </HStack>
          </Pressable>
        </Stack>
        <Divider mb={-2} mt={2} />
        <Center alignItems="center" mb={1} mt={3}>
          <Button
            variant="ghost"
            w="100%"
            h={45}
            onPress={() => handleInvoiceDetails(invoice.id)}
            _pressed={{
              background: "gray.100",
            }}
            leftIcon={
              <Icon color="#3f51b5" as={Ionicons} name="enter" size={6} />
            }
          >
            <Text color="#3f51b5">Acessar</Text>
          </Button>
        </Center>
      </Box>
    </Box>
  );
}
