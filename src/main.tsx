import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import CheckoutPage from './CheckoutPage.tsx';
import SecurePayloadDelivery from './SecurePayloadDelivery.tsx';
import AccessGateway from './AccessGateway.tsx';
import NotFound from './NotFound.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AccessGateway />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payload" element={<SecurePayloadDelivery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
