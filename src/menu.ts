export class Menu {
  private static hertzSlider = document.getElementById("hertz") as HTMLElement;
  private static cyclesLabel = document.getElementById("cycles") as HTMLElement;
  private static amplitudeSlider = document.getElementById(
    "amplitude"
  ) as HTMLElement;
  private static amplitudeLabel = document.getElementById(
    "amplitudeLabel"
  ) as HTMLElement;
  private static shiftSlider = document.getElementById("shift") as HTMLElement;
  private static shiftLabel = document.getElementById(
    "shiftLabel"
  ) as HTMLElement;
  private static frequency = 1;
  private static amplitude = 1;
  private static shift = 0;

  public static init() {
    Menu.shiftSlider.setAttribute("max", (Math.PI * 2).toString());
    Menu.shiftSlider.setAttribute("step", (Math.PI / 100).toString());
  }

  public static listen() {
    Menu.hertzSlider.addEventListener("input", (e) => {
      Menu.cyclesLabel.innerHTML = (e.target as HTMLInputElement).value;
      Menu.frequency = +(e.target as HTMLInputElement).value;
    });

    Menu.amplitudeSlider.addEventListener("input", (e) => {
      Menu.amplitudeLabel.innerHTML = (e.target as HTMLInputElement).value;
      Menu.amplitude = +(e.target as HTMLInputElement).value;
    });

    Menu.shiftSlider.addEventListener("input", (e) => {
      Menu.shiftLabel.innerHTML = (e.target as HTMLInputElement).value;
      Menu.shift = +(e.target as HTMLInputElement).value;
    });
  }

  static get() {
    return {
      frequency: Menu.frequency,
      amplitude: Menu.amplitude,
      shift: Menu.shift,
    };
  }
}
