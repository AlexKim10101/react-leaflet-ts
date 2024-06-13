export type IPieData = {
	title: "industry" | "trade" | "services";
	value: number;
	color: "#66aad7" | "#e89875" | "#f4d079";
};

type ICityData = {
	name: string;
	coordinates: { latitude: number; longitude: number };
	data: IPieData[];
};

export const citiesData: ICityData[] = [
	{
		name: "Алматы",
		coordinates: { latitude: 43.222, longitude: 76.851 },
		data: [
			{ title: "industry", value: 135, color: "#66aad7" },
			{ title: "trade", value: 45, color: "#e89875" },
			{ title: "services", value: 20, color: "#f4d079" },
		],
	},
	{
		name: "Астана",
		coordinates: { latitude: 51.169, longitude: 71.449 },
		data: [
			{ title: "industry", value: 25, color: "#66aad7" },
			{ title: "trade", value: 35, color: "#e89875" },
			{ title: "services", value: 140, color: "#f4d079" },
		],
	},
	{
		name: "Шымкент",
		coordinates: { latitude: 42.341, longitude: 69.59 },
		data: [
			{ title: "industry", value: 80, color: "#66aad7" },
			{ title: "trade", value: 50, color: "#e89875" },
			{ title: "services", value: 50, color: "#f4d079" },
		],
	},
	{
		name: "Актау",
		coordinates: { latitude: 43.641, longitude: 51.172 },
		data: [
			{ title: "industry", value: 50, color: "#66aad7" },
			{ title: "trade", value: 90, color: "#e89875" },
			{ title: "services", value: 30, color: "#f4d079" },
		],
	},
	{
		name: "Актобе",
		coordinates: { latitude: 50.283, longitude: 57.167 },
		data: [
			{ title: "industry", value: 40, color: "#66aad7" },
			{ title: "trade", value: 30, color: "#e89875" },
			{ title: "services", value: 30, color: "#f4d079" },
		],
	},
	{
		name: "Атырау",
		coordinates: { latitude: 47.094, longitude: 51.923 },
		data: [
			{ title: "industry", value: 55, color: "#66aad7" },
			{ title: "trade", value: 15, color: "#e89875" },
			{ title: "services", value: 30, color: "#f4d079" },
		],
	},
	{
		name: "Караганда",
		coordinates: { latitude: 49.803, longitude: 73.073 },
		data: [
			{ title: "industry", value: 45, color: "#66aad7" },
			{ title: "trade", value: 25, color: "#e89875" },
			{ title: "services", value: 30, color: "#f4d079" },
		],
	},
	{
		name: "Кокшетау",
		coordinates: { latitude: 53.299, longitude: 69.404 },
		data: [
			{ title: "industry", value: 30, color: "#66aad7" },
			{ title: "trade", value: 30, color: "#e89875" },
			{ title: "services", value: 40, color: "#f4d079" },
		],
	},
	{
		name: "Костанай",
		coordinates: { latitude: 53.219, longitude: 63.628 },
		data: [
			{ title: "industry", value: 35, color: "#66aad7" },
			{ title: "trade", value: 25, color: "#e89875" },
			{ title: "services", value: 40, color: "#f4d079" },
		],
	},
	{
		name: "Кызылорда",
		coordinates: { latitude: 44.848, longitude: 65.482 },
		data: [
			{ title: "industry", value: 25, color: "#66aad7" },
			{ title: "trade", value: 35, color: "#e89875" },
			{ title: "services", value: 40, color: "#f4d079" },
		],
	},
	{
		name: "Павлодар",
		coordinates: { latitude: 52.283, longitude: 76.967 },
		data: [
			{ title: "industry", value: 40, color: "#66aad7" },
			{ title: "trade", value: 20, color: "#e89875" },
			{ title: "services", value: 40, color: "#f4d079" },
		],
	},
	{
		name: "Петропавловск",
		coordinates: { latitude: 54.872, longitude: 69.131 },
		data: [
			{ title: "industry", value: 30, color: "#66aad7" },
			{ title: "trade", value: 30, color: "#e89875" },
			{ title: "services", value: 40, color: "#f4d079" },
		],
	},
];
