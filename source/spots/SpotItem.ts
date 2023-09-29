import { SegmentItem } from "stew/config";
import { ArrayOfAtLeastOne } from "stew/utilities";

export interface SpotItem extends SegmentItem {
  spotName: string;
  spotThumbnailHref: string;
  spotLocation: ArrayOfAtLeastOne<string>;
  spotTags: ArrayOfAtLeastOne<string>;
  spotLinks: ArrayOfAtLeastOne<{
    linkLabel: string;
    linkHref: string;
  }>;
}
