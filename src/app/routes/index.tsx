import { Button } from "@mui/material";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAppThemContext, useDrawerContext } from "../core/contexts";

export const AppRoutes = () => {
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Button color="primary" variant="contained" onClick={toggleDrawerOpen}>Toggle Theme</Button>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};