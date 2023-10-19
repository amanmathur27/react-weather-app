import React, { useEffect, useState } from 'react'

const Card = () => {

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7ff15ec68dmsh55659d635378d53p192394jsn82795d7b3e8c',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const [info, setInfo] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = async (city) => {
        try {
            const response = await fetch(`${url}?city=${city}`, options);
            const data = await response.json();
            console.log(data);
            setInfo(data);
        }
        catch (e) {
            console.log("An Error Ocurred " + e);
        }
    }

    useEffect(() => {
        fetchData('London');
    }, []);

    return (
        <>
            <div className="flex flex-wrap flex-row mt-20 justify-center items-center gap-4 mb-8">
                <div className="relative h-10 w-auto">
                    <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder="" value={searchTerm} onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 indigo-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        City
                    </label>
                </div>
                <button className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => {
                    fetchData(searchTerm)
                }}>Search</button>
            </div>


            <section className="text-gray-600 body-font mt-8 mb-8">
                <div className="container px-5 mx-auto">
                    <h2 className='text-center mb-16 text-4xl text'>City : {searchTerm === '' ? 'London' : searchTerm}</h2>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{info.temp}&deg;C</h2>
                            <p className="leading-relaxed">Current Temperature</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{info.feels_like}&deg;C</h2>
                            <p className="leading-relaxed">Feels Like</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{info.wind_speed}m/s</h2>
                            <p className="leading-relaxed">Wind Speed</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{info.min_temp}&deg;C</h2>
                            <p className="leading-relaxed">Minimum Temperature</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{info.humidity}%</h2>
                            <p className="leading-relaxed">Humidity</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{info.wind_degrees}&deg;</h2>
                            <p className="leading-relaxed">Wind Degree</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Card