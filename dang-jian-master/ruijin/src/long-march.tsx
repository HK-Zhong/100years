import "@amap/amap-jsapi-types";
import React from "react";

export interface Milestone {
  title: React.ReactNode;
  content: React.ReactNode;
  position: AMap.LngLat;
  date: Date;
}

// Stage 对象应至少包含两个元素
export type Stage = Milestone[];

function d(year: number, month: number, day: number) {
  return new Date(year, month, day);
}

function p(lng: number, lat: number) {
  return new AMap.LngLat(lng, lat);
}

export const longMarch: Stage[] = [
  [
    {
      title: "1",
      content: "go",
      position: p(116, 39),
      date: d(1934, 11, 1),
    },
    {
      title: "2",
      content: "go go",
      position: p(117, 40),
      date: d(1934, 12, 1),
    },
    {
      title: "3",
      content: "go go go",
      position: p(117, 41),
      date: d(1935, 1, 1),
    },
    {
      title: "4",
      content: "go go go go",
      position: p(116, 42),
      date: d(1935, 2, 1),
    },
    {
      title: "5",
      content: "go go go go go",
      position: p(115, 41),
      date: d(1935, 3, 1),
    },
    {
      title: "6",
      content: "go go go go go go",
      position: p(115, 40),
      date: d(1935, 4, 1),
    },
  ],
  [
    {
      title: "4",
      content: "go",
      position: p(118, 41),
      date: d(1934, 12, 1),
    },
    {
      title: "5",
      content: "go go",
      position: p(119, 42),
      date: d(1935, 1, 1),
    },
  ],
  [
    {
      title: "6",
      content: "go go",
      position: p(120, 43),
      date: d(1935, 1, 1),
    },
    {
      title: "7",
      content: "go go go",
      position: p(121, 44),
      date: d(1935, 4, 1),
    },
  ],
];
