import { SegmentModule } from "stew/config";
import { LinkItem } from "./LinkItem.ts";

export default {
  SegmentItemDisplay: ({ someSegmentItem }) => (
    <div>{someSegmentItem.linkTitle}</div>
  ),
  segmentSortOptions: [
    {
      sortOptionKey: "linkTitleAsc",
      sortOptionLabel: "title: a → z",
      getSortOrder: (linkItemA, linkItemB) =>
        linkItemA.linkTitle.localeCompare(linkItemB.linkTitle),
    },
    {
      sortOptionKey: "linkTitleDesc",
      sortOptionLabel: "title: z → a",
      getSortOrder: (linkItemA, linkItemB) =>
        linkItemB.linkTitle.localeCompare(linkItemA.linkTitle),
    },
  ],
  getSegmentItemSearchString: (someLinkItem: LinkItem) =>
    `${someLinkItem.linkTitle},${someLinkItem.linkAuthor.join(
      ","
    )},${someLinkItem.linkTags.join(",")}`,
} satisfies SegmentModule<LinkItem>;
