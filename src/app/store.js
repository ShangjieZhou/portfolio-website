import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "../features/gallery/gallerySlice";

export default configureStore({
  reducer: {
    gallery: gallerySlice,
  },
});
