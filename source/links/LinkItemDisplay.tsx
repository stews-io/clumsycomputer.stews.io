import { SegmentItemDisplayProps } from "stew/config";
import { LinkItem } from "./LinkItem.ts";
// @deno-types="CssModule"
import cssModule from "./LinkItemDisplay.module.scss";
import { LinkButton } from "stew/components";

export interface LinkItemDisplayProps
  extends SegmentItemDisplayProps<LinkItem> {}

export function LinkItemDisplay(props: LinkItemDisplayProps) {
  const { someSegmentItem } = props;
  return (
    <div className={cssModule.itemDisplayContainer}>
      <div className={cssModule.titleButtonContainer}>
        <LinkButton
          href={someSegmentItem.linkHref}
          ariaLabel={"todo"}
          ariaDescription={"todo"}
          target={"_blank"}
        >
          <div className={cssModule.titleText}>
            {someSegmentItem.linkTitle.toLowerCase()}
          </div>
        </LinkButton>
      </div>
      <div className={cssModule.itemInfoContainer}>
        <ItemLabelList
          accessibilityLabel="todo"
          listLabels={someSegmentItem.linkAuthor}
        />
        <ItemLabelList
          accessibilityLabel="todo"
          listLabels={someSegmentItem.linkTags}
        />
        <ItemLinkList
          accessibilityLabel="todo"
          listLabels={someSegmentItem.secondaryLinks}
        />
      </div>
    </div>
  );
}

interface ItemLabelListProps {
  accessibilityLabel: string;
  listLabels: Array<string>;
}

function ItemLabelList(props: ItemLabelListProps) {
  const { accessibilityLabel, listLabels } = props;
  return (
    <div
      className={cssModule.itemLabelListContainer}
      aria-label={accessibilityLabel}
    >
      <div
        role={"list"}
        className={cssModule.itemLabelList}
        aria-label={accessibilityLabel}
      >
        {listLabels.map((someListLabel) => (
          <div
            role={"listitem"}
            className={cssModule.itemLabel}
            key={someListLabel}
          >
            {someListLabel.toLowerCase()}
          </div>
        ))}
      </div>
    </div>
  );
}

interface ItemLinkListProps {
  accessibilityLabel: string;
  listLabels: Array<{
    linkLabel: string;
    linkHref: string;
  }>;
}

function ItemLinkList(props: ItemLinkListProps) {
  const { accessibilityLabel, listLabels } = props;
  return (
    <div
      className={cssModule.itemLabelListContainer}
      aria-label={accessibilityLabel}
    >
      <div
        role={"list"}
        className={cssModule.itemLabelList}
        aria-label={accessibilityLabel}
      >
        {listLabels.map((someListLabel) => (
          <div className={cssModule.linkButtonContainer}>
            <LinkButton
              href={someListLabel.linkHref}
              ariaLabel={"todo"}
              ariaDescription={"todo"}
              target={"_blank"}
            >
              <div
                role={"listitem"}
                className={cssModule.itemLinkLabel}
                key={someListLabel}
              >
                {someListLabel.linkLabel.toLowerCase()}
              </div>
            </LinkButton>
          </div>
        ))}
      </div>
    </div>
  );
}
