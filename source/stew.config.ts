import { SourceStewConfig } from "stew/config";
import {
  getWebsiteIconSvg,
  getGithubIconSvg,
  getTwitterIconSvg,
  getEmailIconSvg,
} from "stew/config/helpers";
import { musicDataset } from "./music/music.dataset.ts";
import { spotsDataset } from "./spots/spots.dataset.ts";
import { linksDataset } from "./links/links.dataset.ts";

export default getStewConfig();

function getStewConfig(): SourceStewConfig {
  return {
    stewInfo: {
      stewName: "clumsycomputer",
      stewTagline: "colorful colorado",
      stewMessage: "just trying to listen and groove",
      stewExternalLinks: [
        {
          linkLabel: "website",
          linkHref: "https://clumsycomputer.com",
          linkIconSvg: getWebsiteIconSvg(),
        },
        {
          linkLabel: "github",
          linkHref: "https://github.com/clumsycomputer",
          linkIconSvg: getGithubIconSvg(),
        },
        {
          linkLabel: "twitter",
          linkHref: "https://twitter.com/c1umsyc0mputer",
          linkIconSvg: getTwitterIconSvg(),
        },
        {
          linkLabel: "email",
          linkHref: "mailto:clumsycomputer@stews.io",
          linkIconSvg: getEmailIconSvg(),
        },
      ],
    },
    stewSegments: [
      {
        segmentDataset: musicDataset,
        segmentModulePath: "./music/music.module.ts",
        segmentKey: "music",
        segmentLabel: "music",
        segmentViews: [
          {
            viewKey: "all",
            viewLabel: "all",
            viewItemIds: musicDataset.map(
              (someMusicItem) => someMusicItem.itemId
            ),
          },
          {
            viewKey: "1990s",
            viewLabel: "1990s",
            viewItemIds: musicDataset.reduce<Array<number>>(
              (viewItemIdsResult, someMusicItem) => {
                if (
                  someMusicItem.musicYear >= 1990 &&
                  someMusicItem.musicYear < 2000
                ) {
                  viewItemIdsResult.push(someMusicItem.itemId);
                }
                return viewItemIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "2000s",
            viewLabel: "2000s",
            viewItemIds: musicDataset.reduce<Array<number>>(
              (viewItemIdsResult, someMusicItem) => {
                if (
                  someMusicItem.musicYear >= 2000 &&
                  someMusicItem.musicYear < 2010
                ) {
                  viewItemIdsResult.push(someMusicItem.itemId);
                }
                return viewItemIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "2010s",
            viewLabel: "2010s",
            viewItemIds: musicDataset.reduce<Array<number>>(
              (viewItemIdsResult, someMusicItem) => {
                if (
                  someMusicItem.musicYear >= 2010 &&
                  someMusicItem.musicYear < 2020
                ) {
                  viewItemIdsResult.push(someMusicItem.itemId);
                }
                return viewItemIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "2020s",
            viewLabel: "2020s",
            viewItemIds: musicDataset.reduce<Array<number>>(
              (viewItemIdsResult, someMusicItem) => {
                if (
                  someMusicItem.musicYear >= 2020 &&
                  someMusicItem.musicYear < 2030
                ) {
                  viewItemIdsResult.push(someMusicItem.itemId);
                }
                return viewItemIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "hip-hop",
            viewLabel: "hip-hop",
            viewItemIds: musicDataset.reduce<Array<number>>(
              (viewItemIdsResult, someMusicItem) => {
                if (
                  someMusicItem.musicTags.findIndex(
                    (someMusicTag) => someMusicTag === "hip-hop"
                  ) >= 0
                ) {
                  viewItemIdsResult.push(someMusicItem.itemId);
                }
                return viewItemIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "jazz",
            viewLabel: "jazz",
            viewItemIds: musicDataset.reduce<Array<number>>(
              (viewItemIdsResult, someMusicItem) => {
                if (
                  someMusicItem.musicTags.findIndex(
                    (someMusicTag) => someMusicTag === "jazz"
                  ) >= 0
                ) {
                  viewItemIdsResult.push(someMusicItem.itemId);
                }
                return viewItemIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "rock",
            viewLabel: "rock",
            viewItemIds: musicDataset.reduce<Array<number>>(
              (viewItemIdsResult, someMusicItem) => {
                if (
                  someMusicItem.musicTags.findIndex(
                    (someMusicTag) => someMusicTag === "rock"
                  ) >= 0
                ) {
                  viewItemIdsResult.push(someMusicItem.itemId);
                }
                return viewItemIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "inthenow",
            viewLabel: "in the now",
            viewItemIds: musicDataset.reduce<Array<number>>(
              (viewItemIdsResult, someMusicItem) => {
                if (
                  someMusicItem.recordingContext.findIndex(
                    (someContextItem) =>
                      someContextItem === "concert" ||
                      someContextItem === "live"
                  ) >= 0
                ) {
                  viewItemIdsResult.push(someMusicItem.itemId);
                }
                return viewItemIdsResult;
              },
              []
            ),
          },
        ],
      },
      {
        segmentDataset: spotsDataset,
        segmentModulePath: "./spots/spots.module.ts",
        segmentKey: "spots",
        segmentLabel: "spots",
        segmentViews: [
          {
            viewKey: "all",
            viewLabel: "all",
            viewItemIds: spotsDataset.map(
              (someSpotItem) => someSpotItem.itemId
            ),
          },
          {
            viewKey: "fortcollins",
            viewLabel: "fort collins",
            viewItemIds: spotsDataset.reduce<Array<number>>(
              (viewItemIdsResult, someSpotItem) => {
                if (
                  someSpotItem.spotLocation.findIndex(
                    (someLocationItem) => someLocationItem === "fort collins"
                  ) >= 0
                ) {
                  viewItemIdsResult.push(someSpotItem.itemId);
                }
                return viewItemIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "mexico",
            viewLabel: "mexico",
            viewItemIds: spotsDataset.reduce<Array<number>>(
              (viewItemIdsResult, someSpotItem) => {
                if (
                  someSpotItem.spotLocation.findIndex(
                    (someLocationItem) => someLocationItem === "mexico"
                  ) >= 0
                ) {
                  viewItemIdsResult.push(someSpotItem.itemId);
                }
                return viewItemIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "breweries",
            viewLabel: "breweries",
            viewItemIds: spotsDataset.reduce<Array<number>>(
              (viewItemIdsResult, someSpotItem) => {
                if (
                  someSpotItem.spotTags.findIndex(
                    (someSpotTag) => someSpotTag === "brewery"
                  ) >= 0
                ) {
                  viewItemIdsResult.push(someSpotItem.itemId);
                }
                return viewItemIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "musicvenues",
            viewLabel: "music venues",
            viewItemIds: spotsDataset.reduce<Array<number>>(
              (viewItemIdsResult, someSpotItem) => {
                if (
                  someSpotItem.spotTags.findIndex(
                    (someSpotTag) => someSpotTag === "music venue"
                  ) >= 0
                ) {
                  viewItemIdsResult.push(someSpotItem.itemId);
                }
                return viewItemIdsResult;
              },
              []
            ),
          },
        ],
      },
      {
        segmentDataset: linksDataset,
        segmentKey: "links",
        segmentLabel: "links",
        segmentModulePath: "./links/links.module.ts",
        segmentViews: [
          {
            viewKey: "all",
            viewLabel: "all",
            viewItemIds: linksDataset.map(
              (someLinkItem) => someLinkItem.itemId
            ),
          },
        ],
      },
    ],
  };
}
