import * as React from "react";
import Link from "@mui/material/Link";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Breadcrumbs, Container, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import "./breadcrumbs.css";

const BreadcrumbComponent = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  if (pathname === "/") {
    return <Breadcrumbs />;
  }

  const path = pathname[1].toUpperCase() + pathname.slice(2);

  return (
    <>
      <Container>
        <Breadcrumbs className="breadcrumb">
          <Link
            underline={"hover"}
            fontSize={12}
            alignContent="center"
            href="/"
          >
            <HomeIcon className="homeIcon" />
          </Link>
          <Typography fontSize={12} fontWeight="bold" paddingTop="3px">
            {pathname.length > 1 ? path : "Home"}
          </Typography>
        </Breadcrumbs>
      </Container>
    </>
  );
};

export default BreadcrumbComponent;
