const request = require("supertest");
const fs = require("fs");
const path = require("path");
const app = require("../server");

jest.mock("fs");

const DATA_PATH = path.join(__dirname, "..", "data", "data.json");

const mockData = JSON.stringify([{ id: 1, name: "Testdata" }]);

beforeEach(() => {
    fs.readFile.mockImplementation((filePath, encoding, callback) => {
        if (filePath === DATA_PATH) {
            callback(null, mockData);
        } else {
            callback(new Error("File not found"));
        }
    });
});

test("GET /data returns JSON data", async () => {
    const response = await request(app).get("/data");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: 1, name: "Testdata" }]);
});
