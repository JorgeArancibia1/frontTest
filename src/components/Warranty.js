import React from "react";

export const Warranty = ({ warranties }) => {
	console.log("warranties => ", warranties);

	return (
		<div className="flex-d-c b-warranty p-3">
			<div className="warranty-container container-center-start">
				<img
					className="img-warranty"
					src="//static.ripley.cl/images/garantia_extendida.svg"
					alt="Garantía"
				/>
				<span className="pl-2 aprovecha">¡Aprovecha un 20% dto. en la Garantía Extendida!</span>
			</div>
			<div className="container-between">
				<div className="d-flex container-center-start">
					<input
						className="input-radio"
						type="radio"
						name="radio"
						id="radio"
					/>
					<span className="warranty-principal-text">
						Extiende tu garantía 1 año
					</span>
				</div>
				<div>
					<span className="precio f-w-700">
						{warranties.formattedPriceValue}/{warranties.formattedPriceValue}
					</span>
				</div>
			</div>
			<div className="fonts">
				<p className="py-3">
					*Con Garantía Extendida tu producto quedará protegido frente a
					defectos de fabricación ante fallas técnicas.
				</p>
				<p>
					Cubre todos los gastos de diagnóstico de falla, repuestos, mano de
					obra y traslados necesarios para la reparacion del producto.{" "}
					<a href="/" className="link">Saber más</a>
				</p>
			</div>
		</div>
	);
};
