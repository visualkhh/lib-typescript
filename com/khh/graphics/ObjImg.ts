import {Obj} from '../obj/Obj';
import {Point} from './Point';

export class ObjImg extends Obj {

  private _img: HTMLImageElement;
  private _head: Point;

  // = new Point(img.width/2,img.height/2,0),
  constructor(x: number = 0, y: number = 0, z: number = 0, img?: HTMLImageElement, head?: Point) {
    super(x, y, z);
    this._img = img;
    this._head = head;
  }

  get img(): HTMLImageElement {
    return this._img;
  }

  set img(value: HTMLImageElement) {
    this._img = value;
  }

  get head(): Point {
    return this._head;
  }

  set head(value: Point) {
    this._head = value;
  }

  public setImg(img: HTMLImageElement): void{
    this._img = img;
  }

  public getImgCenterY() {
    return this.img.height / 2;
  }

  public getImgCenterX() {
    return this.img.width / 2;
  }
}
