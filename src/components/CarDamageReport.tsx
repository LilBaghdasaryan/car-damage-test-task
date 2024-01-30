import React from 'react';
import '../styles/CarDamageReport.css';

type CarDamageReportProps = {
    activePositions: string[];
    onPositionClick: (position: string) => void;
  };
  
  const CarDamageReport: React.FC<CarDamageReportProps> = ({ activePositions, onPositionClick }) => {
    return (
      <div className="car-damage-container">
       
        <div className="position-selectors">
          {(['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'B5', 'C1', 'C2', 'C3', 'C4'] as string[]).map((position) => (
            <button
            key={position}
            className={`position-dot ${position} ${activePositions.includes(position) ? 'active-dot' : ''}`}
            onClick={() => onPositionClick(position)}
        >
          </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default CarDamageReport;
  