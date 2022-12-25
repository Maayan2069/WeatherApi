// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5"
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: () => "/weather?q=London&appid=d797a3f259d04f8c0db2cece65eac112"
    }),
    getWeatherByCityId: builder.query({
      query: (cityId) =>
        `/weather?id=${cityId}&appid=d797a3f259d04f8c0db2cece65eac112`
    })
  })
});

export default weatherApi;
