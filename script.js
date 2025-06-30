const slideLinks = {
  1: "https://docs.google.com/presentation/d/1GxLon4qy7yTBuCHrogUl5uS3uI43DEjn5-zDnMgBSRY/present?slide=id.p#slide=id.p",
  2: "https://docs.google.com/presentation/d/1GxLon4qy7yTBuCHrogUl5uS3uI43DEjn5-zDnMgBSRY/present?slide=id.g36b6c9ecec2_1_0#slide=id.g36b6c9ecec2_1_0",
  3: "https://docs.google.com/presentation/d/1GxLon4qy7yTBuCHrogUl5uS3uI43DEjn5-zDnMgBSRY/present?slide=id.g36b6c9ecec2_0_40#slide=id.g36b6c9ecec2_0_40",
  4: "https://docs.google.com/presentation/d/1GxLon4qy7yTBuCHrogUl5uS3uI43DEjn5-zDnMgBSRY/present?slide=id.g36b6c9ecec2_0_51#slide=id.g36b6c9ecec2_0_51",
  5: "https://docs.google.com/presentation/d/1GxLon4qy7yTBuCHrogUl5uS3uI43DEjn5-zDnMgBSRY/present?slide=id.g36b6c9ecec2_0_62#slide=id.g36b6c9ecec2_0_62",
  6: "https://docs.google.com/presentation/d/1GxLon4qy7yTBuCHrogUl5uS3uI43DEjn5-zDnMgBSRY/present?slide=id.g36b6c9ecec2_0_112#slide=id.g36b6c9ecec2_0_112",
  7: "https://docs.google.com/presentation/d/1GxLon4qy7yTBuCHrogUl5uS3uI43DEjn5-zDnMgBSRY/present?slide=id.g36b6c9ecec2_0_123#slide=id.g36b6c9ecec2_0_123",
  8: "https://docs.google.com/presentation/d/1GxLon4qy7yTBuCHrogUl5uS3uI43DEjn5-zDnMgBSRY/present?slide=id.g36b6c9ecec2_0_160#slide=id.g36b6c9ecec2_0_160",
  9: "https://docs.google.com/presentation/d/1GxLon4qy7yTBuCHrogUl5uS3uI43DEjn5-zDnMgBSRY/present?slide=id.g36b6c9ecec2_0_171#slide=id.g36b6c9ecec2_0_171",
  10: "https://docs.google.com/presentation/d/1GxLon4qy7yTBuCHrogUl5uS3uI43DEjn5-zDnMgBSRY/present?slide=id.g36b6c9ecec2_0_182#slide=id.g36b6c9ecec2_0_182"
};

const opened = new Set();

const stored = localStorage.getItem("opened");
if (stored) {
  JSON.parse(stored).forEach(num => opened.add(num));
}

function updateLocalStorage() {
  localStorage.setItem("opened", JSON.stringify([...opened]));
}

function createEnvelope(num, type) {
  const div = document.createElement('div');
  div.className = 'envelope ' + type;
  div.textContent = type === 'green' ? 'Green ' + num : 'Red ' + num;
  div.dataset.number = num;

  if (type === 'green') {
    div.onclick = () => {
      opened.add(num);
      updateLocalStorage();
      window.location.href = slideLinks[num];
    };
  }

  return div;
}

for (let i = 1; i <= 10; i++) {
  const greenDiv = createEnvelope(i, 'green');
  greenDiv.classList.add('green');
  greenDiv.dataset.number = i;

  const redDiv = createEnvelope(i, 'red');
  redDiv.classList.add('red');
  redDiv.dataset.number = i;

  document.getElementById('green-column').appendChild(greenDiv);
  document.getElementById('red-column').appendChild(redDiv);

  if (opened.has(i)) {
    greenDiv.classList.add('open');
    redDiv.classList.add('open');
  }
}
