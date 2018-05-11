export abstract class Stage {

  private _width: number;
  private _height: number;
  private _data: Map<string, any>;

  get data(): Map<string, any> {
    return this._data;
  }

  set data(value: Map<string, any>) {
    this._data = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }
}
