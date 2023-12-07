import { useEffect, useState } from "react";
import { FlatList, Icon, IconButton, Input, VStack, View } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components/Header";
import NotFound from "../components/NotFound";
import InvoiceCard from "../components/InvoiceCard";
import ApiService from "../services/ApiService";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [invoices, setInvoices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async (invoiceNumber) => {
    const data = await ApiService.getInvoices(invoiceNumber);
    setInvoices(data);
  };

  const handleInvoiceDetails = (id) => {
    navigation.navigate("Details", {
      id: id,
    });
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <>
      <Header />
      <VStack w="100%" p={2} alignSelf="center">
        <Input
          placeholder="Digite o número da nota fiscal"
          width="100%"
          borderRadius="4"
          p={2}
          variant="rounded"
          fontSize="14"
          onChangeText={(e)=> handleSearch(e)}
          InputRightElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              onPress={() => fetchAll(search)}
              as={<MaterialIcons name="search" />}
            />
          }
        />
      </VStack>
      <View>
        <FlatList
          data={invoices || []}
          renderItem={(i) => (
            <InvoiceCard
              invoice={i.item}
              handleInvoiceDetails={handleInvoiceDetails}
            />
          )}
          contentContainerStyle={{ paddingBottom: 200 }}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<NotFound />}
          refreshing={false}
          onRefresh={() => fetchAll()}
        />
      </View>
    </>
  );
}
