import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IHero } from "../../types/hero";

export const heroApi = createApi({
  reducerPath: "heroes",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://3.67.11.191:5000",
  }),
  endpoints: (builder) => ({
    getAllHeroes: builder.query<IHero[], void>({
      query: () => "/heroes",
    }),
  }),
});

export const { useGetAllHeroesQuery } = heroApi;
