import React from "react";
import { Spinner } from "react-bootstrap";
type Props = {
  isLoading: boolean;
  children: React.ReactNode;
};

export const Loader = ({ isLoading, children }: Props) => {
  if (isLoading) {
    return (
      <div className='abs-center'>
        <Spinner
          variant='primary'
          animation='grow'
        />
      </div>
    );
  }

  return <>{children}</>;
};
