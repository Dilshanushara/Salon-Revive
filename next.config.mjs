import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === "production";

export default {
  output: "export",
  basePath: "/Salon-Revive",
  assetPrefix: isProd ? "/Salon-Revive/" : "",
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};
