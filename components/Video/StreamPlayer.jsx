'use client';

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { useState } from 'react';

export default function StreamPlayer(props) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

 
  return (
    <div id="stream-p-border">
      {isLoading && console.log('stream loading...')}
      {hasError && console.log('Loading failed...')}
      <ReactPlayer
        url={`${props.url}`}
        controls
        onReady={() => setIsLoading(false)} 
        onError={(e) => {
          console.error('Player error:', e);
          setHasError(true);
          setIsLoading(false);
        }}
        width="100%"
        height="100%"
        />
    </div>
  );
}