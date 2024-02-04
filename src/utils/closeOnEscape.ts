import { useEffect } from "react";

export function closeOnEsc(myFunction: () => void) {
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                myFunction();
            }
        }
        document.addEventListener("keydown", handleKeyDown);

        return () => document.removeEventListener("keydown", handleKeyDown);
    });
}
