import React from "react";
import { Circle, Tooltip } from "react-leaflet";
import { Airport } from "../fakeData/airports";

type ICircleComponentProps = {
	airport: Airport;
};

const CircleComponent: React.FC<ICircleComponentProps> = ({ airport }) => {
	return (
		<Circle
			center={[airport.coordinates.latitude, airport.coordinates.longitude]}
			radius={airport.distance}
			pathOptions={{ color: airport.color }}
		>
			<Tooltip sticky>{airport.distance / 1000} км</Tooltip>
		</Circle>
	);
};

export default CircleComponent;

// const getRadiusFromKm = (distanceInKm: number, zoom: number) => {
// 	const metersPerKm = 1000;
// 	const radiusInMeters = distanceInKm * metersPerKm;

// 	// Примерная формула для масштабирования
// 	const scale = Math.pow(2, zoom);
// 	const adjustedRadius = Math.floor(radiusInMeters / scale);

// 	return adjustedRadius;
// };
