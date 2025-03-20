import React, { useEffect, useState } from "react";
import axios from "axios";

const App: React.FC = () => {
    const [data, setData] = useState<{ message: string } | null>(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/data")
            .then((res) => setData(res.data))
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return (
        <div className="App">
            <h1>{data ? data.message : "Loading"}</h1>
        </div>
    );
};

export default App;
