import api from "../api";

const dealsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDeals: builder.query({
      query: () => "/deals",
    }),
    createDeal: builder.mutation({
      query: (deal) => ({
        url: "/deals",
        method: "POST",
        body: { deal },
      }),
    }),
    deleteDeal: builder.mutation({
      query: (id) => ({
        url: `/deals/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetDealsQuery,
  useCreateDealMutation,
  useDeleteDealMutation,
} = dealsApi;

export default dealsApi;
