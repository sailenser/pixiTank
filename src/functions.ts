import { AnimatedSprite, PointData, Sprite, Texture } from "pixi.js";

export const createAnimatedSprite = (
  textureNames: string[],
  position: PointData = { x: 0, y: 0 },
  anchor: PointData = { x: 0.5, y: 0.5 },
) => {
  const textures = textureNames.map((name) => Texture.from(name));
  const animatedSprite = new AnimatedSprite(textures);
  animatedSprite.position.copyFrom(position);
  animatedSprite.anchor.copyFrom(anchor);
  return animatedSprite;
};

export const createSprite = (
  textureName: string,
  textureLabel: string,
  position: PointData = { x: 0, y: 0 },
  anchor: PointData = { x: 0.5, y: 0.5 },
) => {
  const sprite = new Sprite(Texture.from(textureName));
  sprite.label = textureLabel;
  sprite.position.copyFrom(position);
  sprite.anchor.copyFrom(anchor);
  return sprite;
};
