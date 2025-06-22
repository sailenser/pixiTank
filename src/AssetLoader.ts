import { Assets } from "pixi.js";

export async function preloadImages() {
  const assets = [
    {
      alias: "GunConnectorD",
      src: "./src/assets/parts/gun_connectors/GunConnectorD.png",
    },
    {
      alias: "HeavyGunB",
      src: "/src/assets/parts/guns/HeavyGunB.png",
    },

    {
      alias: "HeavyHullB",
      src: "/src/assets/parts/hulls/HeavyHullB.png",
    },

    {
      alias: "HeavyTowerB",
      src: "/src/assets/parts/towers/HeavyTowerB.png",
    },

    {
      alias: "TrackСFrame1",
      src: "/src/assets/parts/tracks/TrackСFrame1.png",
    },
    {
      alias: "TrackСFrame2",
      src: "/src/assets/parts/tracks/TrackСFrame2.png",
    },

    {
      alias: "MediumShell",
      src: "/src/assets/parts/bullets/MediumShell.png",
    },
  ];

  await Assets.load(assets);
}
