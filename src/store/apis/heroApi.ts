import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IHero } from "../../types/hero";

export const heroApi = createApi({
  reducerPath: "heroes",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://3.67.11.191:5000/",
  }),
  tagTypes: ["Hero"],
  endpoints: (builder) => ({
    getAllHeroes: builder.query<IHero[], void>({
      providesTags: ["Hero"],
      query: () => "/heroes",
    }),
    uploadImages: builder.mutation({
      query: (files) => ({
        url: "/images",
        method: "POST",
        body: files,
      }),
    }),
    createHero: builder.mutation({
      query: (data: Omit<IHero, "_id">) => ({
        url: "/heroes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Hero"],
    }),
  }),
});

export const {
  useGetAllHeroesQuery,
  useUploadImagesMutation,
  useCreateHeroMutation,
} = heroApi;
