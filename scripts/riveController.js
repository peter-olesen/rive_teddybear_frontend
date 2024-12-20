// import teddy from "../assets/bearrebuild.riv";
let startingHealth = 100;
let isEating;
let isSad;
let healthValue;
let isAnnoyed;
let overFeed;

const r = new rive.Rive({
  src: "../assets/bearrebuild.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  stateMachines: ["Controller"],
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();

    let controller_inputs = r.stateMachineInputs("Controller");
    isEating = controller_inputs?.find((i) => i.name === "isEating");
    isSad = controller_inputs?.find((i) => i.name === "isSad");
    healthValue = controller_inputs?.find((i) => i.name === "healthNumber");
    isAnnoyed = controller_inputs?.find((i) => i.name === "isAnnoyed");
    overFeed = controller_inputs?.find((i) => i.name === "overFeed");

    // Set default input values
    healthValue.value = startingHealth;
  },
});

export { isEating, isSad, healthValue, isAnnoyed, overFeed };
