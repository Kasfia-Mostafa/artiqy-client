import { baseApi } from './baseApi';

// Inject authentication endpoints
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (newUser) => ({
        url: "/auth/register",
        method: "POST",
        body: newUser,
      }),
    }),
    getUserProfile: builder.query({
      query: (userId) => ({
        url: `/users/${userId}`,
      }),
    }),
    updateUserProfile: builder.mutation({
      query: ({ userId, ...updatedInfo }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: updatedInfo,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useRegisterMutation, useGetUserProfileQuery, useUpdateUserProfileMutation } = authApi;
