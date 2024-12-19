'use client';
// @ts-ignore
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
  const handleBeforeLoad = () => {
    console.log('Tawk widget is about to load');
  };

  const handleStatusChange = (status: string) => {
    console.log('Tawk widget status changed:', status);
  };
  
  const onLoad = (status: string) => {
    console.log('Tawk widget status changed:', status);
  };


const TawkChat = () => {
  return (
    <TawkMessengerReact
      propertyId={'675e8993af5bfec1dbdbf931'}
      widgetId={'1if4kiqpb'}
      onBeforeLoad={handleBeforeLoad}
      onStatusChange={handleStatusChange}
      onLoad={onLoad}
    />
  );
};

export default TawkChat;