import React from "react";
import location from "../assets/images/location.svg";

export const Dispatch = () => {
	return (
		<div className="dispatch-container my-2 mb-4 pb-5">
			<div className="container-center-start py-2 px-1">
				<img className="location-image" src={location} alt="" />
				<span className="ml-1 f-w-500">
					Consulta disponibilidad de despacho
				</span>
			</div>
			<div className="container-flex-center">
				<p className="down f-w-500">Comuna/tienda más cercana</p>
				<div>
					<select
						name="select"
						className="color-gray select-dispatch placeholder"
						defaultValue="algo"
					>
						<option value="value1" selected className="placeholder">
							Selecciona tu Comuna/tienda más cercana
						</option>
						<option value="value2">Arica</option>
						<option value="value3">Camarones</option>
					</select>
				</div>
			</div>
		</div>
	);
};
