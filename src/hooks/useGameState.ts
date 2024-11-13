import { useState, useEffect } from 'react';

export function useGameState() {
  const [paperclips, setPaperclips] = useState(0);
  const [funds, setFunds] = useState(0);
  const [clipPrice, setClipPrice] = useState(0.25);
  const [marketingLevel, setMarketingLevel] = useState(1);
  const [autoClippers, setAutoClippers] = useState(0);
  const [wireInches, setWireInches] = useState(1000);
  const [wireCost] = useState(0.25);

  useEffect(() => {
    const autoClipperInterval = setInterval(() => {
      if (autoClippers > 0 && wireInches >= autoClippers) {
        setPaperclips(prev => prev + autoClippers);
        setWireInches(prev => prev - autoClippers);
        setFunds(prev => prev + (clipPrice * autoClippers));
      }
    }, 1000);

    return () => clearInterval(autoClipperInterval);
  }, [autoClippers, clipPrice, wireInches]);

  const makePaperclip = () => {
    if (wireInches > 0) {
      setPaperclips(prev => prev + 1);
      setFunds(prev => prev + clipPrice);
      setWireInches(prev => prev - 1);
    }
  };

  const adjustPrice = (amount: number) => {
    setClipPrice(prev => Math.max(0.01, prev + amount));
  };

  const buyAutoClipper = () => {
    const cost = Math.floor(100 * Math.pow(1.1, autoClippers));
    if (funds >= cost) {
      setFunds(prev => prev - cost);
      setAutoClippers(prev => prev + 1);
    }
  };

  const increaseMarketing = () => {
    const cost = Math.floor(100 * Math.pow(1.1, marketingLevel));
    if (funds >= cost) {
      setFunds(prev => prev - cost);
      setMarketingLevel(prev => prev + 1);
    }
  };

  return {
    paperclips,
    funds,
    clipPrice,
    marketingLevel,
    autoClippers,
    wireInches,
    wireCost,
    makePaperclip,
    buyAutoClipper,
    increaseMarketing,
    adjustPrice,
  };
}