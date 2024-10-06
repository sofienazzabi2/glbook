import { layoutNames } from "../../common/constansts";
import React, { PropsWithChildren } from "react";
import { AuthenticatedLayout } from "./layouts";

type LayoutProps = {
  layout?: layoutNames;
};

const Layout: React.FC<LayoutProps & PropsWithChildren> = ({
  layout,
  children,
}) => {
  if (layout === layoutNames.authenticated) {
    return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
  }
  return <>{children}</>;
};

export default Layout;
