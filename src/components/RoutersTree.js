import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Article from "./Article";
import Profile from "./Profile";
import GalleryCard from "./Galeri";
import VisionAndMission from "./VisiMisi";
import Produk from "./Produk";
import Kontak from "./Kontak";
import Tentang from "./Tentang";
import Event from "./Event";
import Partner from "./Partner";

export default function RoutersTree() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artikel" element={<Article />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/galeri" element={<GalleryCard />} />
        <Route path="/Visi-misi" element={<VisionAndMission />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/kontak-kami" element={<Kontak />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/event" element={<Event />} />
        <Route path="/partner-kami" element={<Partner />} />
      </Routes>
    </>
  );
}
