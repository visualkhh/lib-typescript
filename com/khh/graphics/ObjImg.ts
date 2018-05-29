import {Obj} from '../obj/Obj';
import {Point} from './Point';

export class ObjImg extends Obj {

  private _img: HTMLImageElement;
    private _imgAlign = 'right';
  private _imgBaseline = 'hanging';
  private _head: Point;
  private _index = 0;
  // = new Point(img.width/2,img.height/2,0),
  constructor(x: number = 0, y: number = 0, z: number = 0, img?: HTMLImageElement, head?: Point) {
    super(x, y, z);
    this._img = img;
    this._head = head;
  }

    get index(): number {
        return this._index;
    }

    set index(value: number) {
        this._index = value;
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

    get imgAlign(): string {
        return this._imgAlign;
    }

    set imgAlign(value: string) {
        this._imgAlign = value;
    }

    get imgBaseline(): string {
        return this._imgBaseline;
    }

    set imgBaseline(value: string) {
        this._imgBaseline = value;
    }
}
