module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};
