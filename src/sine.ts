import { Menu } from "./menu";

export class Sine {
  private context: CanvasRenderingContext2D;

  private width: number;
  private height: number;
  private xAxis: number;
  private yAxis: number;

  private unit: number = 100;

  private seconds: number = 0;
  private delta: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;

    this.width = canvas.width;
    this.height = canvas.height;

    this.xAxis = Math.floor(this.height / 2);
    this.yAxis = Math.floor(this.width / 4);
  }

  public draw() {
    this.context.strokeStyle = "#ff0";
    this.context.fillStyle = "#fff";
    this.context.lineWidth = 3;

    this.context.beginPath();
    this.drawSine();
    this.drawCircle();
    this.context.stroke();
  }

  public step() {
    this.seconds -= 0.007;
    this.delta = this.seconds * Math.PI;
  }

  private drawSine() {
    const { frequency, amplitude, shift } = Menu.get();
    let x: number = this.delta;
    let y: number = amplitude * Math.sin(x + shift);

    this.context.moveTo(this.yAxis, this.unit * y + this.xAxis);

    for (let i = this.yAxis; i <= this.width; i += 0.5) {
      x = this.delta + ((-this.yAxis + i) / this.unit) * frequency;
      y = amplitude * Math.sin(x + shift);
      this.context.lineTo(i, this.unit * y + this.xAxis);
    }
  }

  private drawCircle() {
    this.context.moveTo(this.yAxis + this.unit, this.xAxis);
    this.context.arc(this.yAxis, this.xAxis, this.unit, 0, 2 * Math.PI, false);
  }
}
