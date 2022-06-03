import * as React from "react";
import Link from "@mui/material/Link";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {Breadcrumbs, Container, Typography} from "@mui/material";

const BreadcrumbComponent = () => {
  // const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname);

  if (pathname === "/") {
    return (
      <Breadcrumbs>
        {/*<Link>Pages</Link>*/}
        {/*<Link fontSize={12}>Home</Link>*/}
      </Breadcrumbs>
    );
  }

  const path = pathname[1].toUpperCase() + pathname.slice(2);

  return (
    <>
      <Container>
      <Breadcrumbs>
        <Link underline={"hover"} fontSize={12} alignContent="center" href="/">
          Home
        </Link>
        <Typography fontSize={12} fontWeight="bold" paddingTop="3px">
          {pathname.length > 1 ? path : "Home"}
        </Typography>
      </Breadcrumbs>
      </Container>
    </>
  );
};

// href={"/" + pathname}

export default BreadcrumbComponent;
