export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8198cd79b8msh8304dd9e5568876p11cd29jsn72667a583620',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "4db257998d46b9769c5706ab42f4b4e5";

/*
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
*/