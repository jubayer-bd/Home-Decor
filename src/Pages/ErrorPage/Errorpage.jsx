import React from 'react';
import { useRouteError } from 'react-router';
const Errorpage = () => {
  const error = useRouteError()
  return (
   <div>{error.message}</div>
  );
};
export default Errorpage;
