import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  NavBar,
  Feed,
  SearchFeed,
  VideoDetail,
  ChannelDetail,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ background: "#000" }}>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channe/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
