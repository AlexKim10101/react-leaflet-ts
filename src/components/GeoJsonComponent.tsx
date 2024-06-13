import React, { useState, useEffect, useRef } from "react";
import { GeoJSON, GeoJSONProps, Tooltip } from "react-leaflet";
import L, { Map as LeafletMap, GeoJSON as LeafletGeoJSON } from "leaflet";
import { GeoJsonObject, Feature, Geometry } from "geojson";
import kz from "../fakeData/kz.json";
import kz2 from "../fakeData/kz_obl.json";
import us from "../fakeData/us.json";
import one from "../fakeData/one.json";

import mos from "../fakeData/mosObl.json";

type IGeoJsonComponentProps = {};

export const CURRENT_LAYER_ID = "28";
export const ANOTHER_LAYER_ID = "29";
export const DISAPPEARE_MARKERS_ZOOM_VALUE = 6;
export const defaultStyle = {
	weight: 2,
	opacity: 1,
	color: "white",
	fillOpacity: 0.6,
};

const GeoJsonComponent: React.FC<IGeoJsonComponentProps> = props => {
	// console.log("GeoJsonComponent render mos", mos);
	// console.log("GeoJsonComponent render kz", kz);

	// const [tooltipText, setTooltipText] = useState<string>("");
	const geoJsonLayerRef = useRef<L.GeoJSON>(null);

	const highlightFeature = (e: L.LeafletMouseEvent) => {
		const layer = e.target as L.Path;
		layer.setStyle({
			weight: 5,
			color: "#666",
			dashArray: "",
			fillOpacity: 0.7,
		});
	};

	const resetHighlight = (e: L.LeafletMouseEvent) => {
		const layer = e.target as L.Path;
		geoJsonLayerRef.current?.resetStyle(layer);
	};

	const onEachFeature = (feature: any, layer: L.Layer) => {
		console.log(feature);
		if (feature.properties && feature.properties.ADM1_EN) {
			layer.bindTooltip(feature.properties.ADM1_EN, { sticky: true });

			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight,
				click: (e: L.LeafletMouseEvent) => {
					const clickedLayer = e.target as L.Path;
					geoJsonLayerRef.current?.resetStyle(clickedLayer);
					// resetHighlight(e);
					// const clickedLayer = e.target as L.Path;
					// clickedLayer.setStyle({
					// 	weight: 2,
					// 	color: "#3388ff",
					// 	dashArray: "",
					// 	fillOpacity: 0.2,
					// });
				},
			});
		}
	};

	const style: GeoJSONProps["style"] = () => {
		return {
			weight: 2,
			color: "#3388ff",
			dashArray: "",
			fillOpacity: 0.2,
		};
	};

	// useEffect(() => {
	// 	geoJsonLayerRef.current?.setStyle(feature => {
	// 		return {
	// 			...defaultStyle,
	// 			fillColor: "#123026",
	// 		};
	// 	});
	// }, []);

	return (
		<GeoJSON
			ref={geoJsonLayerRef}
			data={one as GeoJsonObject}
			onEachFeature={onEachFeature}
			style={style}
		></GeoJSON>
	);
};

export default GeoJsonComponent;
