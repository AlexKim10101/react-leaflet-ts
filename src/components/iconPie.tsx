import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";

import { createRoot } from "react-dom/client";
// LEAFLET
import L, { Map } from "leaflet";

// PIE CHART
import { PieChart } from "react-minimal-pie-chart";
import { IPieData } from "../fakeData/pieData";

const iconPieChart = (pieData: IPieData[]) => {
	const getSizePieChart = (pieData: IPieData[]) => {
		const res = pieData.reduce((prev, cur) => cur.value + prev, 0);
		return Math.floor(res / 5);
	};

	const sizePieCahrt = getSizePieChart(pieData);

	return L.divIcon({
		className: "marker-pie-chart",
		html: ReactDOMServer.renderToString(
			<div
				style={{
					width: (sizePieCahrt + 8) * 2,
					height: (sizePieCahrt + 8) * 2,
					transform: "translate(-50%, -50%)",
				}}
			>
				<PieChart
					data={pieData}
					radius={sizePieCahrt}
					center={[sizePieCahrt + 8, sizePieCahrt + 8]}
					viewBoxSize={[(sizePieCahrt + 8) * 2, (sizePieCahrt + 8) * 2]}
					lineWidth={70}
					label={({ dataEntry }) => dataEntry.value}
					labelPosition={100 - 70 / 2}
				/>
			</div>
		),
	});
};

export default iconPieChart;
