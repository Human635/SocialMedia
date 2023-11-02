import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../../utils/baseQuery";

interface AddCommentPayload {
  user_id: number;
  main_text: string;
}

interface AddCommentResponse {
  status: number;
  post_id: number;
}

export const commentApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: (builder) => ({
    getCommentList: builder.query({
      query: () => `/comment`,
    }),
    getCommentItem: builder.query({
      query: (commentId: number) => `/comment/${commentId}`,
    }),
    addNewComment: builder.mutation<AddCommentPayload, AddCommentResponse>({
      query: (payload) => {
        return {
          url: "/comment",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const {
  useGetCommentListQuery,
  useLazyGetCommentItemQuery,
  useAddNewCommentMutation,
} = commentApi;
