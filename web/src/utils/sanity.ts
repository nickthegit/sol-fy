import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "4gesbwv8",
  dataset: process.env.SANITY_DATASET || "production",
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "2022-01-12", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
