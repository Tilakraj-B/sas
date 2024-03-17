import api from "./api";

const itemsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "/items",
    }),
    createItem: builder.mutation({
      query: (item) => ({
        url: "/items",
        method: "POST",
        body: { item },
      }),
    }),
    getItem: builder.query({
      query: (id) => `/items/${id}`,
    }),
    updateItem: builder.mutation({
      query: (id, item) => ({
        url: `/items/${id}`,
        method: "PUT",
        body: { item },
      }),
    }),
  }),
});

export const {
  useGetItemsQuery,
  useCreateItemMutation,
  useDeleteItemMutation,
} = itemsApi;

export default itemsApi;
