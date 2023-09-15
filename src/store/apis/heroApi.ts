import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HeroResponse, IHero } from "../../types/hero";

type Params = {
  page: number;
  perPage: number;
};

export const heroApi = createApi({
  reducerPath: "heroes",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://3.67.11.191:5000",
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
        method: "GET",
      }),
    }),
    getHeroById: builder.query({
      query: (id: string) => "/heroes/" + id,
    }),
    uploadImages: builder.mutation({
      query: (files) => ({
        url: "/images",
        method: "POST",
        body: files,
      }),
    }),
    createHero: builder.mutation<IHero, Omit<IHero, "_id">>({
      query: (data) => ({
        url: "/heroes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Hero"],
    }),
    deleteHero: builder.mutation<void, string>({
      query: (id) => ({
        url: "/heroes/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Hero"],
    }),
  }),
});

export const {
  useGetAllHeroesQuery,
  useUploadImagesMutation,
  useCreateHeroMutation,
  useDeleteHeroMutation,
  useGetHeroByIdQuery,
} = heroApi;
