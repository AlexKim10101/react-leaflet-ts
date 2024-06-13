export interface Coordinates {
	latitude: number;
	longitude: number;
}

export interface Airport {
	name: string;
	IATA_code: string;
	location: string;
	terminals: number;
	annual_passenger_traffic: number;
	main_airlines: string[];
	coordinates: Coordinates;
}

export interface AirportsData {
	airports: Airport[];
}
