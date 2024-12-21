import React from 'react';

const PresentationGeneratorResponse = ({ data }) => {
  return (
    <div>
      <h2>Presentation Generator Output</h2>
      {/* Render the presentation data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default PresentationGeneratorResponse;
