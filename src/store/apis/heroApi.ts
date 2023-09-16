import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HeroResponse, IHero } from "../../types/hero";

type Params = {
  page: number;
  perPage: number;
};

type UpdateData = {
  id: string;
  data: Partial<IHero>;
};

export const heroApi = createApi({
  reducerPath: "heroes",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://superheroes-ix9q.onrender.com",
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
    getHeroById: builder.query<IHero, string>({
      query: (id: string) => "/heroes/" + id,
      providesTags: (res) => [{ type: "Hero", id: res?._id }],
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
    updateHero: builder.mutation<void, UpdateData>({
      query: ({ id, data }) => ({
        url: "/heroes/" + id,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: (_, _2, args) => [{ type: "Hero", id: args.id }],
    }),
  }),
});

export const {
  useGetAllHeroesQuery,
  useUploadImagesMutation,
  useCreateHeroMutation,
  useDeleteHeroMutation,
  useGetHeroByIdQuery,
  useUpdateHeroMutation,
} = heroApi;
