/* Array with objects */
const cards = [
  {
    stage: 1,
    img: "./images/eggs.jpg",
    facts:
      "Female butterfly lays egg on a plant. The egg is generaly round or oval in shape.",
  },
  {
    stage: 2,
    img: "./images/caterpillar.jpg",
    facts:
      "The egg haches into a larva, commonly known as a caterpillar. The caterpillar need to eat a lot of foods to grow. They start to eat the plant they hached on. They grow so big from eating that they shed their skin four times before fully developing and moving into the third stage.",
  },
  {
    stage: 3,
    img: "./images/chrysalis.jpg",
    facts:
      "The caterpillar is fully grown and forms a cocoon, also called a chrysalis. Inside the chrysalis, the caterpillar hibernates and transform into a butterfly",
  },
  {
    stage: 4,
    img: "./images/butterfly.jpg",
    facts:
      "The chrysalis opens to reveal a colorful butterfly. The butterfly takes 3-4 hours to learn to fly.",
  },
];

/* Create the container for the stages */
const container = document.createElement("div");
container.classList.add("lifeCycleOfButterflyContainer");
document.body.append(container);

/* Create the for loop */
for (let card of cards) {
  const butterflyCard = document.createElement("div");
  container.classList.add("butterflyCard");
  container.appendChild(butterflyCard);

  /* Create the h2 */
  const title = document.createElement("h2");
  container.textContent = `Stage: ${card.stage}`;
  container.appendChild(title);

  /* Create the img */
  const img = document.createElement("img");
  img.src = `${card.img}`;
  img.alt = `${card.img}`;
  container.appendChild(img);

  /* Create the facts */
  const facts = document.createElement("p");
  facts.textContent = `${card.facts}`;
  container.appendChild(facts);
}
