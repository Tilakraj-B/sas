import api from "./api";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
    createClerk: builder.mutation({
      query: (clerk) => ({
        url: "/users/clerk",
        method: "POST",
        body: { clerk },
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateClerkMutation,
  useDeleteUserMutation,
} = usersApi;

export default usersApi;
