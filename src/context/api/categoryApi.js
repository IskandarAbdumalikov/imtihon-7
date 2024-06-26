import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query({
      query: (params) => ({
        url: "/products/categories",
        params,
      }),
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetAllCategoriesQuery } = productApi;
