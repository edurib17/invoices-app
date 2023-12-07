import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { View } from "react-native";
import ApiService from "../services/ApiService";
import { currencyFormat } from "../utils/Utils";
import InvoiceItemCard from "../components/InvoiceItemCard";
import NotFound from "../components/NotFound";
import { FlatList } from "native-base";

export default function DetailsScreen({ route }) {
  const { id } = route.params;
  const [total, setTotal] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (id) {
      fetchOne();
    }
  }, [id]);

  const fetchOne = async () => {
    const data = await ApiService.getInvoice(id);
    setTotal(data.total);
    setItems(data.items);
  };

  return (
    <>
      <Header goBack={true} description={"Total: " + currencyFormat(total)} />
      <View>
        <FlatList
          data={items || []}
          renderItem={(i) => <InvoiceItemCard invoiceItem={i.item} />}
          contentContainerStyle={{ paddingBottom: 200 }}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<NotFound />}
          refreshing={false}
          onRefresh={() => fetchOne()}
        />
      </View>
    </>
  );
}
