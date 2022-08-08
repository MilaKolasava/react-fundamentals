export const mockNavigatorGeolocation = () => {
    const clearWatchMock = jest.fn();
    const getCurrentPositionMock = jest.fn();
    const watchPositionMock = jest.fn();
    const rejected = jest.fn();
  
    const geolocation = {
      clearWatch: clearWatchMock,
      getCurrentPosition: getCurrentPositionMock,
      watchPosition: watchPositionMock,
    };
  
    Object.defineProperty(global.navigator, 'geolocation', {
      value: geolocation,
      configurable: true,
    });
  
    return { clearWatchMock, getCurrentPositionMock, watchPositionMock };
  };