import {Obj} from '../obj/Obj';
import {Point} from './Point';

export class ObjImg extends Obj {

    private _img: HTMLImageElement;
    private _head: Point;
    private _imgAlign = 'right';
    private _imgBaseline = 'hanging';
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

    get img(): HTMLImageElement{
        return this._img;
    }

    set img(value: HTMLImageElement) {
        this._img = value;
    }

    get head(): Point{
        return this._head;
    }

    set head(value: Point) {
        this._head = value;
    }

    public setImg(img: HTMLImageElement): void {
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

    drawImage(context: CanvasRenderingContext2D, img = this.img, x = this.x, y = this.y, imgAlign = this.imgAlign, imgBaseline = this.imgBaseline) {
        //https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_canvas_textalign
        if (imgAlign === 'center') {
            x = this.x - (img.width / 2);
        }
        //https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_canvas_textbaseline
        if (imgBaseline === 'middle') {
            y = this.y - (img.height / 2);
        } else if (imgBaseline === 'hanging') {
            y = this.y;
        } else if (imgBaseline === 'bottom') {
            y = this.y - (img.height);
        }
        context.drawImage(img, x, y);
    }

    roundedRect(context: CanvasRenderingContext2D, x = this.x, y = this.y, width: number, height: number, radius: number) {
        context.beginPath();
        context.moveTo(x, y + radius);
        context.lineTo(x, y + height - radius);
        context.arcTo(x, y + height, x + radius, y + height, radius);
        context.lineTo(x + width - radius, y + height);
        context.arcTo(x + width, y + height, x + width, y + height - radius, radius);
        context.lineTo(x + width, y + radius);
        context.arcTo(x + width, y, x + width - radius, y, radius);
        context.lineTo(x + radius, y);
        context.arcTo(x, y, x, y + radius, radius);
        context.stroke();
    }
}
