import React from "react";
import Image from "next/image";
import { useReducer } from "react";
import {
	collageBG,
	collageOne,
	collageTwo,
	collageThree,
} from "@/public/index";

export const MultiCards = ({
	collage,
	rectangleClassName,
	rectangleClassNameOverride,
	divClassName,
	divClassNameOverride,
}) => {
	const [state, dispatch] = useReducer(reducer, {
		collage: collage || "default",
	});

	return (
		<div
			className="w-[729px] h-[582px]"
			onMouseLeave={() => {
				dispatch("mouse_leave");
			}}
			onMouseEnter={() => {
				dispatch("mouse_enter");
			}}
		>
			<div
				className={`left-[40px] top-[91px] relative ${
					state.collage === "collage-2" ? "w-[695px]" : "w-[703px]"
				} ${state.collage === "collage-2" ? "h-[392px]" : "h-[400px]"}`}
			>
				<div
					className={`rounded-[4px] bg-[#ffffff14] absolute ${
						state.collage === "collage-2" ? "w-[451px]" : "w-[402px]"
					} ${
						state.collage === "collage-2" ? "left-[122px]" : "left-[128px]"
					} ${state.collage === "collage-2" ? "top-[15px]" : "top-[40px]"} ${
						state.collage === "collage-2" ? "h-[362px]" : "h-[325px]"
					} ${rectangleClassName}`}
				>
					<Image src={collageTwo} alt="collage-bg" />
				</div>
				<div
					className={`[border-image:linear-gradient(to_bottom,rgb(199.76,248.38,255),rgb(25,194,217))_1] border border-solid border-transparent left-0 top-[110px] rounded-[4px] bg-[#ffffff29] absolute transition delay-100 duration-100 ease-out ${
						state.collage === "collage-2" ? "w-[257px]" : "w-[265px]"
					} ${
						state.collage === "collage-2" ? "h-[172px]" : "h-[180px]"
					} ${rectangleClassNameOverride}`}
				>
					<Image src={collageOne} alt="collage-one" />
				</div>
				<div
					className={`[border-image:linear-gradient(to_bottom,rgb(199.76,248.38,255),rgb(25,194,217))_1] border border-solid border-transparent left-[438px] top-0 rounded-[4px] bg-[#ffffff29] absolute transition delay-100 duration-100 ease-out ${
						state.collage === "collage-2" ? "w-[257px]" : "w-[265px]"
					} ${
						state.collage === "collage-2" ? "h-[172px]" : "h-[180px]"
					} ${divClassName}`}
				>
					<Image src={collageThree} alt="collage-two" />
				</div>
				<div
					className={`[border-image:linear-gradient(to_bottom,rgb(199.76,248.38,255),rgb(25,194,217))_1] border border-solid border-transparent left-[438px] top-[220px] rounded-[4px] bg-[#ffffff29] absolute transition delay-100 duration-100 ease-out ${
						state.collage === "collage-2" ? "w-[257px]" : "w-[265px]"
					} ${
						state.collage === "collage-2" ? "h-[172px]" : "h-[180px]"
					} ${divClassNameOverride}`}
				>
					<Image src={collageBG} alt="collage-two" />
				</div>
			</div>
		</div>
	);
};

function reducer(state, action) {
	switch (action) {
		case "mouse_enter":
			return {
				...state,
				collage: "collage-2",
			};

		case "mouse_leave":
			return {
				...state,
				collage: "default",
			};
	}

	return state;
}
