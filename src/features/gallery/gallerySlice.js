import { createSlice } from "@reduxjs/toolkit";

export const SECNAME = {
  START: 0,
  BUKA: 1,
  NAVBIT: 2,
  UNI: 3,
  HIGHSCHOOL: 4,
  NPM: 5,
  END: 6,
};

export const subSection = {
  [SECNAME.START]: [-4],
  [SECNAME.BUKA]: [-15, -16.8, -18.6, -20.4],
  [SECNAME.NAVBIT]: [-25, -26.8],
  [SECNAME.UNI]: [-35, -36.8],
  [SECNAME.HIGHSCHOOL]: [-42, -43.8],
  [SECNAME.NPM]: [-51, -52.8],
  [SECNAME.END]: [-55],
};

export const sectionEnd = {
  [SECNAME.START]: -8,
  [SECNAME.BUKA]: -22,
  [SECNAME.NAVBIT]: -28,
  [SECNAME.UNI]: -38,
  [SECNAME.HIGHSCHOOL]: -45,
  [SECNAME.NPM]: -54,
  [SECNAME.END]: -58,
};

export const sideMap = {
  [SECNAME.START]: 0,
  [SECNAME.BUKA]: 1,
  [SECNAME.NAVBIT]: -1,
  [SECNAME.UNI]: 1,
  [SECNAME.HIGHSCHOOL]: -1,
  [SECNAME.NPM]: 1,
  [SECNAME.END]: 0,
};

const getSecFromZ = (z) => {
  let currSec = SECNAME.END;

  for (const [key, value] of Object.entries(sectionEnd)) {
    if (value < z && value > sectionEnd[currSec]) {
      currSec = key;
    }
  }

  return parseInt(currSec);
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    playerSection: SECNAME.START,
    playerPosition: [sideMap[SECNAME.START], 0.5, subSection[SECNAME.START][0]],
  },
  reducers: {
    movePlayerTo: (state, action) => {
      const sec = action.payload;
      const x = sideMap[sec];
      const z = subSection[sec][0];
      state.playerPosition = [x, 0.5, z];
    },
    updatePlayerSection: (state, action) => {
      const newSec = getSecFromZ(action.payload);
      if (newSec !== state.playerSection) {
        state.playerSection = getSecFromZ(action.payload);
      }
    },
  },
});

export const { movePlayerTo, updatePlayerSection } = gallerySlice.actions;

export default gallerySlice.reducer;
