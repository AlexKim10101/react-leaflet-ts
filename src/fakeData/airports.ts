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
	color: string;
	distance: number;
}

export interface AirportsData {
	airports: Airport[];
}

// Пример использования
export const data: AirportsData = {
	airports: [
		{
			name: "Международный аэропорт Нурсултан Назарбаев (Алматы)",
			IATA_code: "ALA",
			location: "Алматы",
			terminals: 2,
			annual_passenger_traffic: 6000000,
			main_airlines: ["Air Astana", "SCAT Airlines", "Qazaq Air"],
			coordinates: {
				latitude: 43.3521,
				longitude: 77.0405,
			},
			color: "#FF5733",
			distance: 100000,
		},
		{
			name: "Международный аэропорт Нурсултан Назарбаев (Нур-Султан)",
			IATA_code: "NQZ",
			location: "Нур-Султан",
			terminals: 2,
			annual_passenger_traffic: 5000000,
			main_airlines: ["Air Astana", "SCAT Airlines", "FlyArystan"],
			coordinates: {
				latitude: 51.0222,
				longitude: 71.4669,
			},
			color: "#33FF57",
			distance: 105000,
		},
		{
			name: "Международный аэропорт Актобе",
			IATA_code: "AKX",
			location: "Актобе",
			terminals: 1,
			annual_passenger_traffic: 700000,
			main_airlines: ["SCAT Airlines", "Qazaq Air", "Air Astana"],
			coordinates: {
				latitude: 50.2458,
				longitude: 57.2067,
			},
			color: "#5733FF",
			distance: 110000,
		},
		{
			name: "Международный аэропорт Атырау",
			IATA_code: "GUW",
			location: "Атырау",
			terminals: 1,
			annual_passenger_traffic: 800000,
			main_airlines: ["Air Astana", "SCAT Airlines", "Qazaq Air"],
			coordinates: {
				latitude: 47.1214,
				longitude: 51.8258,
			},
			color: "#FF33A6",
			distance: 115000,
		},
		{
			name: "Международный аэропорт Шымкент",
			IATA_code: "CIT",
			location: "Шымкент",
			terminals: 1,
			annual_passenger_traffic: 1500000,
			main_airlines: ["Air Astana", "SCAT Airlines", "FlyArystan"],
			coordinates: {
				latitude: 42.3642,
				longitude: 69.4789,
			},
			color: "#33A6FF",
			distance: 120000,
		},
		{
			name: "Международный аэропорт Актау",
			IATA_code: "SCO",
			location: "Актау",
			terminals: 1,
			annual_passenger_traffic: 1000000,
			main_airlines: ["SCAT Airlines", "Air Astana", "FlyArystan"],
			coordinates: {
				latitude: 43.8601,
				longitude: 51.0923,
			},
			color: "#FFA633",
			distance: 125000,
		},
		{
			name: "Международный аэропорт Караганда",
			IATA_code: "KGF",
			location: "Караганда",
			terminals: 1,
			annual_passenger_traffic: 400000,
			main_airlines: ["SCAT Airlines", "Qazaq Air", "Air Astana"],
			coordinates: {
				latitude: 49.67,
				longitude: 73.3344,
			},
			color: "#A633FF",
			distance: 130000,
		},
		{
			name: "Международный аэропорт Усть-Каменогорск",
			IATA_code: "UKK",
			location: "Усть-Каменогорск",
			terminals: 1,
			annual_passenger_traffic: 300000,
			main_airlines: ["SCAT Airlines", "Qazaq Air", "Air Astana"],
			coordinates: {
				latitude: 50.0366,
				longitude: 82.4945,
			},
			color: "#33FFA6",
			distance: 135000,
		},
		{
			name: "Международный аэропорт Павлодар",
			IATA_code: "PWQ",
			location: "Павлодар",
			terminals: 1,
			annual_passenger_traffic: 200000,
			main_airlines: ["SCAT Airlines", "Qazaq Air", "Air Astana"],
			coordinates: {
				latitude: 52.1945,
				longitude: 77.0733,
			},
			color: "#A6FF33",
			distance: 140000,
		},
		{
			name: "Международный аэропорт Кызылорда",
			IATA_code: "KZO",
			location: "Кызылорда",
			terminals: 1,
			annual_passenger_traffic: 150000,
			main_airlines: ["SCAT Airlines", "Qazaq Air", "Air Astana"],
			coordinates: {
				latitude: 44.7061,
				longitude: 65.5926,
			},
			color: "#FFA633",
			distance: 145000,
		},
	],
};
