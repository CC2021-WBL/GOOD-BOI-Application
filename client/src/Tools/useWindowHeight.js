import { useEffect, useState } from 'react';

export default function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState({
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setWindowHeight({
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowHeight;
}
