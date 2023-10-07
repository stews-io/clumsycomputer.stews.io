import { SegmentItem } from "stew/config/mod.ts";
import { ArrayOfAtLeastOne } from "stew/utilities/mod.ts";

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
