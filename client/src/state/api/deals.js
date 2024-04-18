import api from "../api";

const dealsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDeals: builder.query({
      query: () => "/deals",
      providesTags:["Deal"]
    }),
    createDeal: builder.mutation({
      query: (deal) => ({
        url: "/deals",
        method: "POST",
        body: { deal },
      }),
      invalidatesTags: ["Deal"],
    }),
    getDeal: builder.query({
      query: (id) => `/deals/${id}`,
      invalidatesTags: ["Deal"],
    }),
    deleteDeal: builder.mutation({
      query: (id) => ({
        url: `/deals/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Deal"],
    }),
  }),
});

export const {
  useGetDealQuery,
  useGetDealsQuery,
  useCreateDealMutation,
  useDeleteDealMutation,
} = dealsApi;

export default dealsApi;
