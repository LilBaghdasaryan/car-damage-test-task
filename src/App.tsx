import React, { useEffect } from 'react';
import { useUnit } from 'effector-react';
import { $positions, fetchPositionsFx, positionClicked } from './model';
import './App.css';
import { PluginOptions } from './types';
import CarDamageReport from './components/CarDamageReport';


type AppProps = {
  options: PluginOptions['options'];
};

export const App: React.FC<AppProps> = ({ options }) => {
  useEffect(() => {
    fetchPositionsFx();
    options.onInit();
  }, [options]);

  const positions = useUnit($positions);
    useEffect(() => {
      options.onPositionChange(positions);
    }, [positions, options]);

  const handlePositionClick = (position: string) => {
    positionClicked(position);
  };

  return (
    <div>
      <CarDamageReport
        activePositions={positions}
        onPositionClick={handlePositionClick}
      />
    </div>
  );
};
