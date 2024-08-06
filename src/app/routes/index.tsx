import { Button } from "@mui/material";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDrawerContext } from "../core/contexts";

export const AppRoutes = () => {
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Routes>
            <Route path="/" element={<Button color="primary" variant="contained" onClick={toggleDrawerOpen}>Toggle Theme</Button>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};