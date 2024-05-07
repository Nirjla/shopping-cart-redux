import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getBanners: builder.query({
      query: () => "banners",
    }),
    getProducts:builder.query({
      query:()=>"products"
    })
  }),
});

export const { useGetBannersQuery , useGetProductsQuery} = api;
