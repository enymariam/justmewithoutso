import React, { useEffect, useState } from "react";

const App: React.FC = () => {
    const [data, setData] = useState<{ message: string } | null>(null);

    useEffect(() => {
        fetch("http://localhost:5000/data")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="App">
            <h1>{data ? data.message : "Loading..."}</h1>
        </div>
    );
};

export default App;
