import { Axis } from "./axis";
import { Menu } from "./menu";
import { Sine } from "./sine";

class Scene {
  private static canvas: HTMLCanvasElement = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;
  private static context: CanvasRenderingContext2D = Scene.canvas.getContext(
    "2d"
  ) as CanvasRenderingContext2D;

  private static axis: Axis = new Axis(Scene.canvas);
  private static sine: Sine = new Sine(Scene.canvas);

  static draw() {
    Scene.context.clearRect(0, 0, Scene.canvas.width, Scene.canvas.height);

    Scene.axis.draw();

    Scene.context.save();

    Scene.sine.draw();

    Scene.context.restore();

    Scene.sine.step();
  }

  public static animate() {
    requestAnimationFrame(Scene.animate);
    Scene.render();
  }

  static render() {
    setTimeout(Scene.draw, 30);
  }
}

Scene.animate();
Menu.init();
Menu.listen();
