import api from "../api";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),
    createClerk: builder.mutation({
      query: (clerk) => ({
        url: "/users/clerk",
        method: "POST",
        body: { clerk },
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateClerkMutation,
  useDeleteUserMutation,
} = usersApi;

export default usersApi;
