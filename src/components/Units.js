import React from 'react';

const Units = () => {
  const conversionArray = [
    ['Teaspoons', 1],
    ['Tablespoons', 3],
    ['Ounces', 6],
    ['Cups', 48],
    ['Pints', 96],
    ['Quarts', 192],
    ['Gallons', 384]
  ];

  return (
    <>
      {conversionArray.map((unit, currInd) => (
        <option key={currInd} value={unit[1]}>
          {unit[0]}
        </option>
      ))}
    </>
  );
};

export default Units;


