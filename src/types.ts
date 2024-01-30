export type PluginOptions = {
    selector: string;
    options: {
      initializedOptions: string[];
      onPositionChange: (positions: string[]) => void;
      onComplete: (positions: string[]) => void;
      onInit: () => void;
    };
  };