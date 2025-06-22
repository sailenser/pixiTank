import { Application, Graphics } from "pixi.js";
import type { FederatedPointerEvent } from "pixi.js";
import { preloadImages } from "@/AssetLoader";
// import { addBackground } from "@/addBackground.ts";
import { Tank } from "@/Tank.ts";
import { Tween, Easing } from "@tweenjs/tween.js";

(async () => {
  const app = new Application();
  await setup(app);
  await preloadImages();
  // addBackground(app);
  addMarker(app);

  const tank: Tank = new Tank();
  app.stage.addChild(tank.view);

  app.stage.interactive = true;
  app.stage.hitArea = app.screen;
  app.stage.interactiveChildren = false;

  app.stage.on("pointerdown", (event: FederatedPointerEvent) => {
    const distanseToCenter = event.getLocalPosition(app.stage);
    const distanseToTank = event.getLocalPosition(tank.view);
    const angle = Math.atan2(distanseToTank.y, distanseToTank.x);

    const tweenTankDirection = new Tween(tank.view.position)
      .to({ x: distanseToCenter.x, y: distanseToCenter.y }, 3000)
      .onStart(() => tank.startTracks())
      .onComplete(() => tank.stopTracks())
      .start();

    const tweenTankTowerDirection = new Tween({
      tempAngle: tank.towerDirection,
    })
      .to({ tempAngle: angle }, 1000)
      .easing(Easing.Quadratic.InOut)
      .onUpdate((obj) => {
        tank.towerDirection = obj.tempAngle;
      })
      .start();

    const tweenTankBodyDirection = new Tween({
      tempAngle: tank.bodyDirection,
    })
      .to({ tempAngle: angle }, 2000)
      .easing(Easing.Quadratic.InOut)
      .onUpdate((obj) => {
        tank.bodyDirection = obj.tempAngle;
      })
      .start();

    app.ticker.add(() => {
      tweenTankDirection.update();
      tweenTankTowerDirection.update();
      tweenTankBodyDirection.update();
    });
  });
})();

async function setup(app: Application) {
  globalThis.__PIXI_APP__ = app;

  await app.init({ background: "#1099bb", resizeTo: window });
  app.stage.label = "AppStageContainer";

  document.getElementById("pixi-container")!.appendChild(app.canvas);
}

function addMarker(app: Application) {
  const marker = new Graphics();
  marker.label = "Marker";
  marker
    .rect(window.innerWidth / 2 - 5, window.innerHeight / 2 - 5, 10, 10)
    .fill({ color: 0xff0000 });
  marker.pivot.set(0.5, 0.5);
  app.stage.addChild(marker);
}
