import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Button, HStack, Heading, Icon, StatusBar } from "native-base";

export const Header = ({ goBack, description }) => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar bg="#3f51b5" barStyle="light-content" />
      <HStack
        bg="#3f51b5"
        p={goBack ? 2 : 4}
        w="100%"
        justifyContent="space-between"
      >
        <HStack justifyContent="flex-start" alignItems="center">
          {goBack ? (
            <HStack>
              <Button variant="ghost" onPress={() => navigation.goBack()}>
                <Icon
                  as={Ionicons}
                  size={6}
                  color="muted.100"
                  name="arrow-back"
                />
              </Button>
            </HStack>
          ) : null}
          <HStack>
            <Heading fontSize={18} color="muted.100">
              {description ? description : "Nota Fiscal App"}
            </Heading>
          </HStack>
        </HStack>
      </HStack>
    </>
  );
};
