import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHomePage from '../pages/AdminHomePage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={ <HomePage /> } />
                <Route path="/trips/list" element={ <ListTrips /> } />
                <Route path="/trips/application" element={ <ApplicationFormPage /> } />
                <Route path="/login" element={ <LoginPage/> } />
                <Route path="/admin/trips/list" element={ <AdminHomePage /> } />
                <Route path="/admin/trips/create" element={ <CreateTrip /> } />
                <Route path="/admin/trips/:id" element={ <TripDetails /> } />
                <Route path="*" element={ <Erro /> } />

            </Routes>  
            
        </BrowserRouter>
    );
}
export default Router;