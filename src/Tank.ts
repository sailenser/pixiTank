import { Container, AnimatedSprite, Sprite } from "pixi.js";
import { createAnimatedSprite, createSprite } from "@/functions";

export class Tank {
  private readonly _view: Container;
  private readonly _towerContainer: Container;
  private readonly _bodyContainer: Container;
  private readonly _tracksLeft: AnimatedSprite;
  private readonly _tracksRight: AnimatedSprite;
  private readonly _hull: Sprite;
  private readonly _gunLeft: Sprite;
  private readonly _gunRight: Sprite;
  private readonly _gunConnectorD: Sprite;
  private readonly _HeavyTowerB: Sprite;

  constructor() {
    this._view = new Container();
    this._view.label = "Tank";
    const width = this._view.width / 2;
    const height = this._view.height / 2;
    this._view.position.set(
      window.innerWidth / 2 - width,
      window.innerHeight / 2 - height,
    );

    this._tracksLeft = createAnimatedSprite(["TrackСFrame1", "TrackСFrame2"], {
      x: 0,
      y: -80,
    });

    this._tracksRight = createAnimatedSprite(["TrackСFrame1", "TrackСFrame2"], {
      x: 0,
      y: 80,
    });

    this._tracksLeft.label = "tracksLeft";
    this._tracksLeft.animationSpeed = 0.25;

    this._tracksRight.label = "tracksRight";
    this._tracksRight.animationSpeed = 0.25;

    this._bodyContainer = new Container();
    this._bodyContainer.label = "Body";
    this._bodyContainer.addChild(this._tracksLeft, this._tracksRight);

    this._towerContainer = new Container();
    this._towerContainer.label = "Tower";

    this._hull = createSprite(
      "HeavyHullB",
      "hull",
      { x: 0, y: 0 },
      { x: 0.5, y: 0.5 },
    );
    this._bodyContainer.addChild(this._hull);

    this._gunLeft = createSprite(
      "HeavyGunB",
      "gunLeft",
      { x: 140, y: -27 },
      { x: 0.5, y: 0.5 },
    );

    this._gunRight = createSprite(
      "HeavyGunB",
      "gunRight",
      { x: 160, y: 29 },
      { x: 0.5, y: 0.5 },
    );

    this._towerContainer.addChild(this._gunLeft, this._gunRight);

    this._gunConnectorD = createSprite(
      "GunConnectorD",
      "gunConnectorD",
      { x: 80, y: 0 },
      { x: 0.5, y: 0.5 },
    );
    this._towerContainer.addChild(this._gunConnectorD);

    this._HeavyTowerB = createSprite("HeavyTowerB", "heavyTowerB");
    this._towerContainer.addChild(this._HeavyTowerB);

    this._view.addChild(this._bodyContainer, this._towerContainer);
  }

  public get view(): Container {
    return this._view;
  }

  public rotateTowerBy(angle: number): void {
    this._towerContainer.rotation += angle;
  }

  public rotateBodyBy(angle: number): void {
    this._bodyContainer.rotation += angle;
  }

  public startTracks(): void {
    this._tracksLeft.play();
    this._tracksRight.play();
  }

  public stopTracks(): void {
    this._tracksLeft.stop();
    this._tracksRight.stop();
  }

  public set towerDirection(value: number) {
    this._towerContainer.rotation = value;
  }

  public get towerDirection(): number {
    return this._towerContainer.rotation;
  }

  public set bodyDirection(value: number) {
    this._bodyContainer.rotation = value;
  }

  public get bodyDirection(): number {
    return this._bodyContainer.rotation;
  }

  public set x(value: number) {
    this._view.position.x = value;
  }

  public get x(): number {
    return this._view.position.x;
  }

  public set y(value: number) {
    this._view.position.y = value;
  }

  public get y(): number {
    return this._view.position.y;
  }
}
