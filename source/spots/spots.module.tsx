import { SegmentModule } from "stew/config";
import { SpotItem } from "./SpotItem.ts";
import { SpotItemDisplay } from "./SpotItemDisplay.tsx";

export default {
  SegmentItemDisplay: SpotItemDisplay,
  segmentSortOptions: [
    {
      sortOptionKey: "spotNameAsc",
      sortOptionLabel: "name: a → z",
      getSortOrder: (spotItemA, spotItemB) =>
        spotItemA.spotName.localeCompare(spotItemB.spotName),
    },
    {
      sortOptionKey: "spotNameDesc",
      sortOptionLabel: "name: z → a",
      getSortOrder: (spotItemA, spotItemB) =>
        spotItemB.spotName.localeCompare(spotItemA.spotName),
    },
    {
      sortOptionKey: "spotLocationAsc",
      sortOptionLabel: "location: a → z",
      getSortOrder: (spotItemA, spotItemB) =>
        spotItemA.spotLocation[0].localeCompare(spotItemB.spotName),
    },
    {
      sortOptionKey: "spotLocationDesc",
      sortOptionLabel: "location: z → a",
      getSortOrder: (spotItemA, spotItemB) =>
        spotItemB.spotLocation[0].localeCompare(spotItemA.spotName),
    },
  ],
  getSegmentItemSearchString: (someSpotItem: SpotItem) =>
    `${someSpotItem.spotName},${
      someSpotItem.spotLocation
    },${someSpotItem.spotTags.join(",")}`,
} satisfies SegmentModule<SpotItem>;
