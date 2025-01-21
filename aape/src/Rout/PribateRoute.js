import React from 'react';
import { Navigate } from 'react-router-dom'
import ProducDetail from '../Page/ProducDetail';

export default function PrivateRoute({loginok}) {
  return loginok == true ? <ProducDetail /> : <Navigate to={"/login"} />
}