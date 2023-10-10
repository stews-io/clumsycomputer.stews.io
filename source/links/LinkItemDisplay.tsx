import { BasicLinkDisplay } from "stew/components/mod.ts";
import { SegmentItemDisplayProps } from "stew/config/mod.ts";
import { LinkItem } from "./LinkItem.ts";

export interface LinkItemDisplayProps
  extends SegmentItemDisplayProps<LinkItem> {}

export function LinkItemDisplay(props: LinkItemDisplayProps) {
  const { someSegmentItem } = props;
  return (
    <BasicLinkDisplay
      itemTitle={someSegmentItem.linkTitle}
      itemHref={someSegmentItem.linkHref}
      itemLabels={[...someSegmentItem.linkAuthor, ...someSegmentItem.linkTags]}
      itemSecondaryLinks={someSegmentItem.secondaryLinks}
    />
  );
}
