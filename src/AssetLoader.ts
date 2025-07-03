import { Assets } from "pixi.js";

export async function preloadImages() {
  const assets = [
    {
      alias: "GunConnectorD",
      src: "./assets/parts/gun_connectors/GunConnectorD.png",
    },
    {
      alias: "HeavyGunB",
      src: "./assets/parts/guns/HeavyGunB.png",
    },

    {
      alias: "HeavyHullB",
      src: "./assets/parts/hulls/HeavyHullB.png",
    },

    {
      alias: "HeavyTowerB",
      src: "./assets/parts/towers/HeavyTowerB.png",
    },

    {
      alias: "TrackСFrame1",
      src: "./assets/parts/tracks/TrackСFrame1.png",
    },
    {
      alias: "TrackСFrame2",
      src: "./assets/parts/tracks/TrackСFrame2.png",
    },

    {
      alias: "MediumShell",
      src: "./assets/parts/bullets/MediumShell.png",
    },
  ];

  await Assets.load(assets);
}
