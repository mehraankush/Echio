"use client";
import { useEffect } from "react";

const CardsSmall = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.innerHTML = `
            (() => {
                const due_date = new Date('2024-02-22');
                const days_deadline = 5;
                
                const current_date = new Date();
                const utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
                const utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
                const days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
                
                if (days > 0) {
                    const days_late = days_deadline - days;
                    opacity = (opacity < 0) ? 0 : opacity;
                    let opacity = (days_late * 100 / days_deadline) / 100;
                        if (opacity >= 0 && opacity <= 1) {
                            opacity = (opacity > 1) ? 1 : opacity;
                            document.getElementsByTagName("BODY")[0].style.opacity = opacity;
                        }
                    }
            })();
        `;
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	}, []);

	return null;
};

export default CardsSmall;
