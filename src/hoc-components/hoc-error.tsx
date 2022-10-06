import React, { ReactNode } from 'react';
import ErrorBoundory from '../error-components/error-boundory';

const withError = (Wrapped: any) => {
  return (props: any) => {

    return (
      <ErrorBoundory>
       <Wrapped {...props}/>
    </ErrorBoundory>
  );
}
};

export default withError;