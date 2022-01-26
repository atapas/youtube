const reasons = [
  "React is Declarative",
  "It is fast",
  "JSX is simple",
  "It is Component-based",
  "It is easy to learn",
  "It is fun to use",
  "Write Once, Use Everywhere",
];

function tellWhyReact() {
  // Get the element by Id
  const whyId = document.getElementById("why-react");

  // create a h2 element - heading
  const heading = document.createElement("h2");
  heading.innerText = "Why React?";
  heading.classList.add("heading");
  whyId.appendChild(heading);

  // Loop through the reasons and update DOM
  for (let i = 0; i < reasons.length; i++) {
    // create a list element
    const list = document.createElement("li");
    list.innerText = reasons[i];
    whyId.appendChild(list);
  }
}

tellWhyReact();
