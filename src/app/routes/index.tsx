import { Button } from "@mui/material";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAppThemContext } from "../core/contexts";

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemContext();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Button color="primary" variant="contained" onClick={toggleTheme}>Toggle Theme</Button>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};