/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_WEATHER_KEY: string;
  readonly VITE_WEATHER_MIDLAND: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
