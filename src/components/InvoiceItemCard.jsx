import {
  Badge,
  Box,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
  View,
} from "native-base";
import { currencyFormat } from "../utils/Utils";

export default function InvoiceItemCard({ invoiceItem }) {
  return (
    <Box alignItems="center" justifyContent="center" m={2} key={invoiceItem.id}>
      <Box
        p={3}
        rounded="lg"
        borderRadius={10}
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _light={{
          backgroundColor: "white",
        }}
        bg="white"
        w="100%"
      >
        <HStack w="100%">
          <HStack w="70%">
            <Text fontSize={14}>Nome: {invoiceItem.name}</Text>
          </HStack>
          <HStack position="absolute" left="72%" top="5%">
            <Badge w={90}>
              <Text fontSize={11}>Produto</Text>
            </Badge>
          </HStack>
        </HStack>
        <View mr="2" ml="2" mt="2" />
        <VStack mt="2">
          <FormControl.Label
            _text={{
              bold: true,
              fontSize: 12,
            }}
          >
            Quantidade:
          </FormControl.Label>
          <Input
            isDisabled
            defaultValue={invoiceItem?.quantity?.toString().replace(".", ",")}
            height="40px"
          />
        </VStack>
        <VStack mt="2">
          <FormControl.Label
            _text={{
              bold: true,
              fontSize: 12,
            }}
          >
            Valor:
          </FormControl.Label>
          <Input
            isDisabled
            defaultValue={currencyFormat(
              invoiceItem?.unitPrice && invoiceItem?.unitPrice > 0
                ? invoiceItem?.unitPrice
                : 0
            )}
            height="40px"
          />
        </VStack>
        <VStack mt="2">
          <FormControl.Label
            _text={{
              bold: true,
              fontSize: 12,
            }}
          >
            Total:
          </FormControl.Label>
          <Input
            isDisabled
            defaultValue={currencyFormat(
              invoiceItem?.unitTotal && invoiceItem?.unitTotal > 0
                ? invoiceItem?.unitTotal
                : 0
            )}
            height="40px"
          />
        </VStack>
      </Box>
    </Box>
  );
}
