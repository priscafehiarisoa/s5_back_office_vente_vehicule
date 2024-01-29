import React from 'react';
import Statistique from './Statistique';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const statistiquesData = [
    { nombre: 0, moisOuAnnee: 8 },
    { nombre: 1, moisOuAnnee: 6 },
    { nombre: 1, moisOuAnnee: 5 },
    { nombre: 0, moisOuAnnee: 9 },
    { nombre: 0, moisOuAnnee: 2 },
    { nombre: 0, moisOuAnnee: 3 },
    { nombre: 1, moisOuAnnee: 11 },
    { nombre: 0, moisOuAnnee: 12 },
    { nombre: 0, moisOuAnnee: 10 },
    { nombre: 0, moisOuAnnee: 7 },
    { nombre: 0, moisOuAnnee: 1 },
    { nombre: 2, moisOuAnnee: 4 },
];

const StatistiquesPages = () => {
    return (
        <div>
            <h1>Statistiques</h1>
            {statistiquesData.map((stat, index) => (
                <Statistique key={index} nombre={stat.nombre} moisOuAnnee={stat.moisOuAnnee} />
            ))}
            <BarChart width={600} height={300} data={statistiquesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="moisOuAnnee" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="nombre" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default StatistiquesPage;