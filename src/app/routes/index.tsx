import { Button } from "@mui/material";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Button color="primary" variant="contained">Teste</Button>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};