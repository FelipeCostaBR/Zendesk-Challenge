import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

type PaginationProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Pagination: React.FC<PaginationProps> = ({ children, ...rest }) => <Button {...rest}>{children}</Button>;
export default Pagination;
