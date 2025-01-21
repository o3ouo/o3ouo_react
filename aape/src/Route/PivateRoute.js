import React from 'react';
import ProducDetail from '../Page/ProducDetail';
import { Navigate } from 'react-router-dom';

const PivateRoute = ({loginok}) => {
  return loginok == true ? <ProducDetail/> : <Navigate to={"/login"}/>
}

export default PivateRoute;