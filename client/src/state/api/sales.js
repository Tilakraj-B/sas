import api from "../api";

const salesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSalesForItem: builder.query({
      query: (itemId) => `/sales/${itemId}`,
    }),
  }),
});

export const { useGetSalesForItemQuery } = salesApi;

export default salesApi;
