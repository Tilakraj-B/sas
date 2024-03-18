import api from "../api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (name, email, password, secret) => ({
        url: "/auth/register",
        method: "POST",
        body: { name, email, password, secret },
      }),
    }),
    login: builder.mutation({
      query: (email, password) => ({
        url: "/auth/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authApi;

export default authApi;
