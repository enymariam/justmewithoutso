import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import axios from "axios";

jest.mock("axios");

describe("App component", () => {
    it("Shows message from database if data has loaded", async () => {
        (axios.get as jest.Mock).mockResolvedValue({
            data: { message: "Hello world" },
        });

        render(<App />);

        await waitFor(() => screen.getByText("Hello world"));
        expect(screen.getByText("Hello world")).toBeInTheDocument();
    });
});
