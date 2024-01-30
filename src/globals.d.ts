import { PluginOptions } from './types';

declare global {
  interface Window {
    CAR_DAMAGE_API: {
      init: (options: PluginOptions) => void;
    };
  }
}

export {};
