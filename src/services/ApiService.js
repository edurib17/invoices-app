import axios from "axios";

const url = "http://192.168.10.12:8081/v1/";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: url,
      timeout: 5000,
    });
  }

  getInvoices = async (invoiceNumber) => {
    try {
      const response = await this.api.get(
        invoiceNumber && invoiceNumber?.trim() != "" ? "invoices?invoiceNumber=" + invoiceNumber : "invoices"
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  getInvoice = async (id) => {
    try {
      const response = await this.api.get("invoices/" + id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
}

export default new ApiService();
