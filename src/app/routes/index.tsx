import { Button } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDrawerContext } from "../core/contexts";
import { useEffect } from "react";

export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();


    /// useEffect para setter das opções de menu lateral,
    // ? Com setDrawerOptions é possível definir links de forma dinâmica a partir das próprias rotas
    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Página inicial',
                icon: 'home',
                path: '/',
            },
            {
                label: 'Cidades',
                icon: 'work',
                path: '/cidades',
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Button color="primary" variant="contained" onClick={toggleDrawerOpen}>Toggle Theme</Button>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};