import { createRoot } from 'react-dom/client';
import { App } from './App';
import { PluginOptions } from './types';


if (import.meta.env.DEV) {
  const rootElement = document.getElementById('root') as HTMLElement;
  const root = createRoot(rootElement);
  root.render(<App options={{
    initializedOptions: ['A1', 'B2'],
    onPositionChange: (positions: string[]) => {
      console.log('Positions changed', positions);
    },
    onComplete: (positions: string[]) => {
      console.log('Complete', positions);
    },
    onInit: () => {
      console.log('Initialization complete');
    },
  }} />);
} else {
  window.CAR_DAMAGE_API = {
    init: (pluginOptions: PluginOptions) => {
      console.log('Inited');
      const { selector, options } = pluginOptions;
      if (selector) {
        const renderElement = document.querySelector(selector) as HTMLElement;
        if (renderElement) {
          const root = createRoot(renderElement);
          root.render(<App options={options} />);
        }
      }
    },
  };
  
}

