export class Axis {
  private context: CanvasRenderingContext2D;

  private width: number;
  private height: number;
  private xAxis: number;
  private yAxis: number;

  constructor(canvas: HTMLCanvasElement) {
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;

    this.width = canvas.width;
    this.height = canvas.height;

    this.xAxis = Math.floor(this.height / 2);
    this.yAxis = Math.floor(this.width / 4);
  }

  public draw() {
    this.context.font = "18px sans-serif";
    this.context.strokeStyle = "#000";
    this.context.lineJoin = "round";

    this.context.beginPath();
    this.drawAxes();
    this.context.stroke();
    this.drawLables();
  }

  private drawAxes() {
    this.context.moveTo(0, this.xAxis);
    this.context.lineTo(this.width, this.xAxis);
    this.context.moveTo(this.yAxis, 0);
    this.context.lineTo(this.yAxis, this.height);
  }

  private drawLables() {
    this.context.fillText('1', this.width / 2 + 50, this.xAxis + 15);
    this.context.fillText('2', this.width - 15, this.xAxis + 15);
    
    this.context.fillText('1', this.yAxis - 15, this.yAxis - 50);
    this.context.fillText('0.5', this.yAxis - 35, this.yAxis + 50 - 15);
    this.context.fillText('0', this.yAxis - 15, this.xAxis - 10);
    this.context.fillText('-0.5', this.yAxis - 35, this.height / 2 + 100 - 15);
    this.context.fillText('-1', this.yAxis - 25, this.height / 2 + 200);
  }
}
