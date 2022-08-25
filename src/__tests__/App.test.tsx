
import {render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import App from "../App";

describe("Render AAP", () => {
    it('should ', () => {
        render(<App/>)
        expect(screen.getByText("Vite + React")).toBeInTheDocument()
    });
})
