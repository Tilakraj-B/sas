import React, { createContext, useContext, useEffect, useState } from "react";
import { useGetDealsQuery } from "../../../state/api/deals";
import { useCreateTransactionMutation } from "../../../state/api/transactions";
import Quagga from "quagga"; // Import QuaggaJS
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useGetItemsQuery } from "../../../state/api/items";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

/*
{
    "sales": [
        {
            "item": {
                "_id": "6620263afaf95d0342f03dc7",
                "name": "iPhone X",
                "pricePerItem": 899,
                "category": "Electronics",
                "imageUrl": "https://cdn.dummyjson.com/product-images/2/1.jpg",
                "quantity": 25,
                "createdAt": "2024-04-17T19:42:50.193Z",
                "updatedAt": "2024-04-18T04:52:45.361Z",
                "__v": 0
            },
            "quantity": 1,
            "totalPrice": 899,
            "discount": 50,
            "_id": "6620a71d210112aa15b64eff",
            "__v": 0,
            "createdAt": "2024-04-18T04:52:45.456Z",
            "updatedAt": "2024-04-18T04:52:45.456Z"
        },
        {
            "item": {
                "_id": "6620263afaf95d0342f03dc9",
                "name": "Samsung Universe 9",
                "pricePerItem": 1249,
                "category": "Electronics",
                "imageUrl": "https://cdn.dummyjson.com/product-images/3/1.jpg",
                "quantity": 35,
                "createdAt": "2024-04-17T19:42:50.195Z",
                "updatedAt": "2024-04-18T04:52:45.361Z",
                "__v": 0
            },
            "quantity": 1,
            "totalPrice": 1249,
            "discount": 50,
            "_id": "6620a71d210112aa15b64f00",
            "__v": 0,
            "createdAt": "2024-04-18T04:52:45.457Z",
            "updatedAt": "2024-04-18T04:52:45.457Z"
        }
    ],
    "totalPrice": 2148,
    "totalDiscount": 100,
    "_id": "6620a71d210112aa15b64f02",
    "createdAt": "2024-04-18T04:52:45.466Z",
    "updatedAt": "2024-04-18T04:52:45.466Z",
    "__v": 0
}
*/

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 12,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
  },
  table: {
    display: "table",
    width: "100%",
    marginTop: 30,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableColHeader: {
    padding: 5,
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    fontWeight: "bold",
  },
  tableCol1: {
    width: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #f2f2f2",
    padding: "4px 8px",
  },
  tableCol2: {
    width: "35%",
    display: "flex",
    alignItems: "center",
    border: "1px solid #f2f2f2",
    padding: "4px 8px",
  },
  tableCol3: {
    width: "15%",
    display: "flex",
    alignItems: "center",
    border: "1px solid #f2f2f2",
    padding: "4px 8px",
  },
  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  totalColHeader: {
    width: "80%",
    textAlign: "right",
    fontWeight: "bold",
  },
  totalCol: {
    width: "20%",
    textAlign: "right",
  },
});

// Create Invoice component
const Invoice = ({ transaction }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Invoice</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableColHeader, styles.tableCol1]}>#</Text>
          <Text style={[styles.tableColHeader, styles.tableCol2]}>Item</Text>
          <Text style={[styles.tableColHeader, styles.tableCol3]}>
            Quantity
          </Text>
          <Text style={[styles.tableColHeader, styles.tableCol3]}>Price</Text>
          <Text style={[styles.tableColHeader, styles.tableCol3]}>
            Discount
          </Text>
          <Text style={[styles.tableColHeader, styles.tableCol3]}>Total</Text>
        </View>
        {transaction.sales.map((sale, index) => (
          <View style={styles.tableRow} key={sale._id}>
            <Text style={styles.tableCol1}>{index + 1}</Text>
            <Text style={styles.tableCol2}>{sale.item.name}</Text>
            <Text style={styles.tableCol3}>{sale.quantity}</Text>
            <Text style={styles.tableCol3}>{sale.item.pricePerItem}</Text>
            <Text style={styles.tableCol3}>{sale.discount}</Text>
            <Text style={styles.tableCol3}>{sale.totalPrice}</Text>
          </View>
        ))}
        <View style={styles.totalRow}>
          <Text style={styles.totalColHeader}>Total Price:</Text>
          <Text style={styles.totalCol}>{transaction.totalPrice}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalColHeader}>Total Discount:</Text>
          <Text style={styles.totalCol}>{transaction.totalDiscount}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalColHeader}>Grand Total:</Text>
          <Text style={styles.totalCol}>
            {transaction.totalPrice - transaction.totalDiscount}
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

const InvoicePDF = ({ transaction }) => (
  <div>
    <PDFDownloadLink
      document={<Invoice transaction={transaction} />}
      fileName="invoice.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download PDF"
      }
    </PDFDownloadLink>
  </div>
);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { data: { deals = [] } = {} } = useGetDealsQuery();
  const { data: { items = [] } = {} } = useGetItemsQuery();

  const [selectedDealId, setSelectedDealId] = useState(null);
  const [initiateTransaction, { data, isLoading, isError }] =
    useCreateTransactionMutation();
  const [transaction, setTransaction] = useState(null);

  const [isScanningBarcode, setIsScanningBarcode] = useState(null);

  const scanBarcode = () => {
    setIsScanningBarcode(true);
  };
  const startScanner = () => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#scanner-container"),
          constraints: {
            width: 300,
            height: 200,
            facingMode: "environment", // or user
          },
        },
        decoder: {
          readers: [
            "code_128_reader",
            "ean_reader",
            "ean_8_reader",
            "code_39_reader",
            "code_39_vin_reader",
            "codabar_reader",
            "upc_reader",
            "upc_e_reader",
            "i2of5_reader",
          ],
        },
      },
      (err) => {
        if (err) {
          console.error("Failed to initialize Quagga:", err);
          return;
        }
        Quagga.start();
        setIsScanningBarcode(true); // Update state to indicate that the scanner is active
      }
    );

    Quagga.onDetected((data) => {
      if (data && data.codeResult && data.codeResult.code) {
        // Handle the detected barcode data
        console.log("Detected barcode:", data.codeResult.code);
        const item = items.find((item) => item.id === data.codeResult.code);
        addToCart(item);
      }
    });
  };

  const stopScan = () => {
    setIsScanningBarcode(false);
  };

  useEffect(() => {
    if (isScanningBarcode) {
      startScanner();
      console.log("Scanner Started"); // Start the scanner when scanBarcode state is true
    } else {
      if (isScanningBarcode === false) Quagga.stop(); // Stop the scanner when scanBarcode state is false
    }

    return () => {
      if (isScanningBarcode !== null) Quagga.stop(); // Clean up the scanner when component unmounts
    };
  }, [isScanningBarcode]);

  const addToCart = (item) => {
    console.log("adding to cart", item);
    setTransaction(null);
    const itemInCart = cart.find((i) => i._id === item._id);
    if (itemInCart) {
      itemInCart.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const increaseQuantity = (item) => {
    console.log("increasing quantity", item);
    const itemInCart = cart.find((i) => i._id === item._id);
    if (itemInCart) {
      itemInCart.quantity++;
      setCart([...cart]);
    }
  };

  const decreaseQuantity = (item) => {
    console.log("decreasing quantity", item);
    const itemInCart = cart.find((i) => i._id === item._id);
    if (itemInCart) {
      itemInCart.quantity--;
      if (itemInCart.quantity === 0) {
        setCart(cart.filter((i) => i._id !== item._id));
      } else {
        setCart([...cart]);
      }
    }
  };

  const removeFromCart = (item) => {
    console.log("removing from cart", item);
    setCart(cart.filter((i) => i._id !== item._id));
  };

  const getApplicableDeals = () => {
    const itemIds = cart.map((i) => i._id);
    return deals?.filter((deal) =>
      deal.applicableItems.every((item) => itemIds.includes(item))
    );
  };

  const selectDeal = (dealId) => {
    console.log("selecting deal", dealId);
    setSelectedDealId(dealId);
  };

  const checkout = () => {
    const transactionData = {
      items: cart.map((item) => ({
        _id: item._id,
        quantity: item.quantity,
      })),
      deal: selectedDealId,
    };

    initiateTransaction(transactionData);
  };

  useEffect(() => {
    if (data) {
      console.log("transaction successful", data);
      setCart([]);
      setSelectedDealId(null);
      const transaction = { ...data.transaction };
      transaction.sales = data.sales;
      transaction.sales = transaction.sales.map(({ ...sale }) => {
        sale.item = data.items.find((item) => item._id === sale.item);
        return sale;
      });
      console.log("transaction", transaction);
      setTransaction(transaction);
    }
  }, [data]);

  const value = {
    items: cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    isScanningBarcode,
    deals: getApplicableDeals(),

    selectedDealId,
    selectDeal,
    scanBarcode,
    checkout,
    stopScan,
    InvoicePDFButton: transaction
      ? () => <InvoicePDF transaction={transaction} />
      : () => null,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
