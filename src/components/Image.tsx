import React, { useEffect, useState } from "react";
import logo from "../logo.svg";

export default function Image() {
    return (
        <div>
            <img src={logo} alt="React logo" />
        </div>
    );
}
