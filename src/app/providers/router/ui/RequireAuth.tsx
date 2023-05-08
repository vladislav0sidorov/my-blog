import { UserRole, getUserAuthData, getUserRoleSelector } from 'entities/User';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  const userRoles = useSelector(getUserRoleSelector);

  const hasRequiredRoles = React.useMemo(() => {
    if (!roles) {
      return true;
    }
    return roles.some((RequireRole) => {
      const hasRole = userRoles?.includes(RequireRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={RoutePath.home} state={{ from: location }} />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden_page} state={{ from: location }} />;
  }
  return children;
}
