/* Array with objects */
const cards = [
  {
    stage: 1,
    facts:
      "Female butterfly lays egg on a plant. The egg is generaly round or oval in shape.",
  },
  {
    stage: 2,
    facts:
      "The egg haches into a larva, commonly known as a caterpillar. The caterpillar need to eat a lot of foods to grow. They start to eat the plant they hached on. They grow so big from eating that they shed their skin four times before fully developing and moving into the third stage.",
  },
  {
    stage: 3,
    facts:
      "The caterpillar is fully grown and forms a cocoon, also called a chrysalis. Inside the chrysalis, the caterpillar hibernates and transform into a butterfly",
  },
  {
    stage: 4,
    facts:
      "The chrysalis opens to reveal a colorful butterfly. The butterfly takes 3-4 hours to learn to fly",
  },
];

/* Create the container for the stages */
const container = document.createElement("div");
container.classList.add("lifeCycleOfButterflyContainer");
document.body.append("container");

/* Create the loop */
for (let card of cards) {
  const butterflyCard = document.createElement("div");
  container.classList.add("butterflyCard");
  container.append("butterflyCard");

  /* Create the h2 */
  const title = document.createElement("h2");
  title.textContent = cards.stage;
  butterflyCard.append(title);
}
