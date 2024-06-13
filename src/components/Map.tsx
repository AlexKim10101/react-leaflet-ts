import React from "react";
import L from "leaflet";

import {
	Circle,
	LayerGroup,
	LayersControl,
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	useMap,
	Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconPieChart from "./iconPie";

import {
	data as airportsData,
	Airport,
	AirportsData,
} from "../fakeData/airports";

import { citiesData, IPieData } from "../fakeData/pieData";
import GeoJsonComponent from "./GeoJsonComponent";
import CircleComponent from "./CircleComponent";

function Map() {
	// const mapContext = useMap();
	const center = { latitude: 49.67, longitude: 73.3344 };
	const airports: Airport[] = airportsData.airports;
	// const map = useMap();
	// const zoom = map.getZoom();

	const basemapsDict = {
		osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
		dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
		cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
	};

	const cityIcon = L.icon({
		iconUrl: "/city-icon.png", // Путь к иконке в папке public
		iconSize: [32, 32], // Размер иконки
		iconAnchor: [16, 16], // Точка привязки иконки (центр снизу)
		popupAnchor: [0, -32], // Точка привязки всплывающего окна (центр сверху)
	});

	const airportIcon = L.icon({
		iconUrl: "/airport-icon.png", // Путь к иконке в папке public
		iconSize: [32, 32], // Размер иконки
		iconAnchor: [16, 16], // Точка привязки иконки (центр снизу)
		popupAnchor: [0, -32], // Точка привязки всплывающего окна (центр сверху)
	});

	return (
		<MapContainer
			center={[center.latitude, center.longitude]}
			zoom={6}
			scrollWheelZoom={true}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url={basemapsDict.hot}
			/>
			<LayersControl>
				<LayersControl.Overlay checked name="regions">
					<LayerGroup>
						<GeoJsonComponent />
					</LayerGroup>
				</LayersControl.Overlay>

				<LayersControl.Overlay checked name="Cities">
					<LayerGroup>
						{citiesData.map((city, index) => (
							<Marker
								key={index}
								position={[
									city.coordinates.latitude,
									city.coordinates.longitude,
								]}
								icon={iconPieChart(city.data)}
							>
								<Popup>
									{city.data.map(v => (
										<div className="data-row">
											<span className="data-title">{v.title}</span>
											<span className="data-value">{v.value}</span>
										</div>
									))}
								</Popup>
							</Marker>
						))}
					</LayerGroup>
				</LayersControl.Overlay>

				<LayersControl.Overlay checked name="Aiports">
					<LayerGroup>
						{airports.map(airport => (
							<Marker
								key={airport.IATA_code}
								position={[
									airport.coordinates.latitude,
									airport.coordinates.longitude,
								]}
								icon={airportIcon}
							>
								<Popup>
									<div className="tooltip-content">
										<p>
											<strong>Аэропорт:</strong> {airport.name}
										</p>
										<p>
											<strong>Расположение:</strong> {airport.location}
										</p>
										<p>
											<strong>Координаты:</strong> [
											{airport.coordinates.latitude.toFixed(4)},{" "}
											{airport.coordinates.longitude.toFixed(4)}]
										</p>
										<p>
											<strong>Дальность полета:</strong>{" "}
											{airport.distance / 1000} км
										</p>
									</div>
								</Popup>
							</Marker>
						))}
					</LayerGroup>
				</LayersControl.Overlay>

				<LayersControl.Overlay checked name="Aiports distance">
					<LayerGroup>
						{airports.map(airport => (
							<CircleComponent
								key={"circle" + airport.IATA_code}
								airport={airport}
							/>
						))}
					</LayerGroup>
				</LayersControl.Overlay>
			</LayersControl>
			{/* <GeoJsonComponent /> */}
		</MapContainer>
	);
}

export default Map;
