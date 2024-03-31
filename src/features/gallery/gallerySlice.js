import { createSlice } from "@reduxjs/toolkit";

export const SUBSECTION = {
  START: [-4],
  BUKA: [-10, -11.8, -13.6, -15.4],
  NAVBIT: [-19, -20.8],
  UNI: [-25, -26.8],
  HIGHSCHOOL: [-28],
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    playerPosition: SUBSECTION.START,
    playerCurrentSection: SUBSECTION.START,
  },
  reducers: {
    movePlayerTo: (state, action) => {
      state.playerPosition = action.payload;
    },
    updatePlayerCurrentSection: (state, action) => {
      //   const currPosition = action.payload;
      //   let section = SUBSECTION.START;
      //   const area = SUBSECTION
      //   for (const [key, value] of Object.entries(SUBSECTION)) {
      //     const line = value + SECTIONOFFSET;
      //     if (line > currPosition && line < section) {
      //       section = value;
      //     }
      //   }
      //   state.playerCurrentSection = section;
    },
  },
});

export const { movePlayerTo, updatePlayerCurrentSection } =
  gallerySlice.actions;

export default gallerySlice.reducer;
