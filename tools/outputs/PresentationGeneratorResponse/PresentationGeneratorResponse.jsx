import React from 'react';
import { useSelector } from 'react-redux';

const PresentationGeneratorResponse = () => {
  const { response } = useSelector((state) => state.tools);

  return (
    <div>
      <h2>Presentation Generator Output</h2>
      {/* Render the presentation data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default PresentationGeneratorResponse;
