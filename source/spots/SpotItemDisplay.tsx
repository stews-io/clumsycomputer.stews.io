import { ThumbnailLinksDisplay } from "stew/components/mod.ts";
import { SegmentItemDisplayProps } from "stew/config/mod.ts";
import { SpotItem } from "./SpotItem.ts";

export interface SpotItemDisplayProps
  extends SegmentItemDisplayProps<SpotItem> {}

export function SpotItemDisplay(props: SpotItemDisplayProps) {
  const { someSegmentItem } = props;
  return (
    <ThumbnailLinksDisplay
      itemTitle={someSegmentItem.spotName}
      itemThumbnailHref={someSegmentItem.spotThumbnailHref}
      itemLinks={someSegmentItem.spotLinks.map((someSpotLink) => ({
        ...someSpotLink,
        ariaLabel: `navigate to ${someSpotLink.linkHref}`,
        ariaDescription: `a button that navigates in a new tab to ${someSpotLink.linkLabel}`,
      }))}
      itemLabelLists={[
        {
          ariaLabel: "spot name",
          listLabels: [someSegmentItem.spotName],
        },
        {
          ariaLabel: "spot location",
          listLabels: [someSegmentItem.spotLocation.slice(0, 2).join(", ")],
        },
        {
          ariaLabel: "spot tags",
          listLabels: someSegmentItem.spotTags,
        },
      ]}
    />
  );
}
