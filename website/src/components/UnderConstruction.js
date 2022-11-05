import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function UnderConstruction() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', textAlign: 'center', backgroundColor: '#FFE27E', padding: 20, marginBottom: 20, marginTop: 20, borderRadius: 20}}>
      <h1 style={{textDecoration: 'underline', color: '#000', whiteSpace: 'nowrap'}}>
      🚧 Page Under Construction 🚧
      </h1>
      <span style={{textAlign: 'center', marginLeft: 50, marginRight: 50, color: '#000'}}>We are still working on fully documenting this feature. While some documentation may still be listed below it may be incomplete, erroneous, and subject to change.</span>
        <ThemedImage
          alt="Under construction image"
          style={{width: '100%', height: '300px'}}
          sources={{
            light: useBaseUrl('/logos/under-construction.svg'),
            dark: useBaseUrl('/logos/under-construction.svg'),
          }}
        />
  </div>
  )
};