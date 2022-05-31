import React, { useContext, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Faq.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import SearchIcon from "@mui/icons-material/Search";
import { useLoading } from "../../assets/useLoading";
import { ApiContext } from "../../assets/apiContext";
import { FaqQuestionCard } from "../../components/FaqQuestionCard/FaqQuestionCard";
import { HeadlineWithUnderline } from "../../components/HeadlineWithUnderline/headlineWithUnderline";

export function FaqPage() {
  const { listFaq } = useContext(ApiContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState("");
  const { loading, error, data } = useLoading(
    async () => await listFaq({ search }),
    [search]
  );

  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    setSearch(searchQuery);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div id="error-text">{error.toString()}</div>
      </div>
    );
  }

  return (
    <Box
      mt={20}
      px={{ xs: 2, md: 12, lg: 18, xl: 28 }}
      style={{ height: 650, overflowY: "auto" }}
    >
      <Grid
        textAlign="center"
        container
        justifyContent="center"
        style={{ maxWidth: 1440, margin: "auto" }}
      >
        <Grid item container justifyContent="center" xs={12} md={6}>
          <Box>
            {HeadlineWithUnderline("FAQs", 80, "#034F7A")}
            <Typography mt={3} paragraph>
              How can we help you?
            </Typography>
          </Box>
        </Grid>
        <Grid item container justifyContent="center" xs={12} md={6}>
          <Box>
            <form onSubmit={handleSubmit}>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                name="search"
                className="searchBar"
                placeholder="search..."
              />
              <SearchIcon
                color="primary"
                onClick={handleSubmit}
                style={{
                  cursor: "pointer",
                  fontSize: "30px",
                  textAlign: "center",
                }}
              />
            </form>
          </Box>
        </Grid>
      </Grid>
      <Box my={4}>
        <Grid
          container
          justify="flex-end"
          style={{ maxWidth: 1440, margin: "auto" }}
        >
          {data.map((faqs, index) => (
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <FaqQuestionCard key={faqs._id} faqs={faqs} index={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Grid container justifyContent="center" textAlign="center">
        <Grid item xs={12}>
          <article>
            <p>If you can't find your question, please complete the form</p>
            <CustomButton to={"/contact"} variant="text">
              Contact
            </CustomButton>
          </article>
        </Grid>
      </Grid>
    </Box>
  );
}
