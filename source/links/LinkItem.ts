import { SegmentItem } from "stew/config";
import { ArrayOfAtLeastOne } from "stew/utilities";

export interface LinkItem extends SegmentItem {
  linkTitle: string;
  linkHref: string;
  linkAuthor: ArrayOfAtLeastOne<string>;
  linkTags: ArrayOfAtLeastOne<string>;
  secondaryLinks: Array<{
    linkLabel: string;
    linkHref: string;
  }>;
}
