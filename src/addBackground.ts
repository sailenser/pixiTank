import { Application, Sprite } from "pixi.js";

export function addBackground(app: Application): void {
  const GunConnectorD = Sprite.from("GunConnectorD");
  GunConnectorD.label = "GunConnectorD";
  GunConnectorD.anchor.set(0.5);
  app.stage.addChild(GunConnectorD);
}
