import { useEffect, useState } from 'react';

export function Guest() {
  const [guestData, setGuestData] = useState(false);

  const handleGuestData = (newData) => {
    setGuestData(newData);
    localStorage.setItem('guestData', JSON.stringify(newData));
  };

  useEffect(() => {
    if (guestData === true) {
      const storedGuestData = localStorage.getItem('guestData');
      if (storedGuestData) {
        setGuestData(JSON.parse(storedGuestData));
      } else {
        localStorage.setItem('guestData', JSON.stringify(guestData));
      }
    }
  }, [guestData]);

  return <button onClick={handleGuestData}></button>;
}
