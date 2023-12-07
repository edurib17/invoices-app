import { Icon, Stack, Text } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function NotFound() {
  return (
    <Stack style={{ flex: 1, marginTop: 100, alignItems: "center" }}>
      <Icon
        as={Ionicons}
        name="warning-outline"
        size={68}
        mt={20}
        color="gray.400"
      />
      <Text
        style={{
          fontSize: 18,
          color: "gray",
          marginTop: 20,
        }}
      >
        Nada Encontrado!
      </Text>
    </Stack>
  );
}
