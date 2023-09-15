import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HeroResponse, IHero } from "../../types/hero";

type Params = {
  page: number;
  perPage: number;
};

export const heroApi = createApi({
  reducerPath: "heroes",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://3.67.11.191:5000",
    baseUrl: "http://localhost:5500",
  }),
  tagTypes: ["Hero"],
  endpoints: (builder) => ({
    getAllHeroes: builder.query<HeroResponse, Params>({
      providesTags: ["Hero"],
      query: ({ page, perPage }) => ({
        url: "/heroes",
        params: {
          page,
          perPage,
        },
      }),
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
