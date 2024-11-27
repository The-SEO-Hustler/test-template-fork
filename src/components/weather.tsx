import React from 'react'
import Image from 'next/image';

async function fetchWeatherData() {
  const API_KEY = 'c957b31532e046d0bd213053242311';
  const location = 'San Diego';
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(location)}`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache data for 1 hour
    if (!response.ok) throw new Error('Failed to fetch weather data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

async function Weather() {
  // const weatherData: any = {}
  const weatherData = await fetchWeatherData();
  console.log('weather', weatherData
  )
  return (
    <>
      {!weatherData?.location?.name ?
        null :
        (

          <div className='absolute top-4 left-4 bg-black/50 rounded-lg p-4 z-20'>
            <h2 className='text-xl md:text-3xl'>{weatherData?.location?.name}</h2>
            <div className='mt-2 flex w-full justify-between gap-2 items-center'>
              <p>{weatherData?.current?.temp_f}°F</p>
              {weatherData?.current?.condition?.icon &&
                <Image
                  src={`https:${weatherData?.current?.condition?.icon}`}
                  alt={weatherData?.current?.condition?.text}
                  width={32}
                  height={32}
                />
              }
            </div>
          </div>
        )}
    </>
  )
}

export default Weather