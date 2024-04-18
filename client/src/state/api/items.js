import api from "../api";

const itemsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "/items",
      providesTags: ["Item"],
    }),
    createItem: builder.mutation({
      query: (item) => ({
        url: "/items",
        method: "POST",
        body: { item },
      }),
      invalidatesTags: ["Item"],
    }),
    getItem: builder.query({
      query: (id) => `/items/${id}`,
      providesTags: ["Item"],
    }),
    updateItem: builder.mutation({
      query: (id, item) => ({
        url: `/items/${id}`,
        method: "PUT",
        body: { item },
      }),
      invalidatesTags: ["Item"],
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Item"],
    }),
  }),
});

export const {
  useGetItemQuery,
  useGetItemsQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = itemsApi;

export default itemsApi;
