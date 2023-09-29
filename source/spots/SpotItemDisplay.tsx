import { MultiLinkImageItemDisplay } from "stew/components";
import { SegmentItemDisplayProps } from "stew/config";
import { SpotItem } from "./SpotItem.ts";

export interface SpotItemDisplayProps
  extends SegmentItemDisplayProps<SpotItem> {}

export function SpotItemDisplay(props: SpotItemDisplayProps) {
  const { someSegmentItem } = props;
  return (
    <MultiLinkImageItemDisplay
      itemTitle={someSegmentItem.spotName}
      itemThumbnailHref={someSegmentItem.spotThumbnailHref}
      itemLinks={someSegmentItem.spotLinks.map((someSpotLink) => ({
        ...someSpotLink,
        ariaLabel: `navigate to ${someSpotLink.linkHref}`,
        ariaDescription: `a button that navigates in a new tab to ${someSpotLink.linkLabel}`,
      }))}
      itemLabelLists={[
        {
          accessibilityLabel: "spot name",
          listLabels: [someSegmentItem.spotName],
        },
        {
          accessibilityLabel: "spot location",
          listLabels: [someSegmentItem.spotLocation.slice(0, 2).join(", ")],
        },
        {
          accessibilityLabel: "spot tags",
          listLabels: someSegmentItem.spotTags,
        },
      ]}
    />
  );
}
