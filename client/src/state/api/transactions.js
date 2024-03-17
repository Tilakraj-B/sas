import api from "./api";

const transactionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createTransaction: builder.mutation({
      query: (cart) => ({
        url: "/transactions",
        method: "POST",
        body: { cart },
      }),
    }),
  }),
});

export const { useCreateTransactionMutation } = transactionsApi;

export default transactionsApi;
