const $monExitButton = document.getElementById("mon-exit-button");
const $monsterPop = document.querySelector(".monster-pop");

$monExitButton.addEventListener("click", function () {
  $monsterPop.style.display = "none";
});

class Monster {
  constructor(
    name,
    chineseName,
    tags,
    isGender,
    location,
    character,
    story,
    image
  ) {
    this.name = name;
    this.chineseName = chineseName;
    this.tags = tags;
    this.isGender = isGender; // isGender 1이면 여자, 0이면 남자
    this.location = location;
    this.character = character;
    this.story = story;
    this.image = image;
  }

  monPopUp() {
    let monsterTitle = document.getElementsByClassName("monster-title")[0];
    let nameTag = document.createElement("div");
    nameTag.setAttribute("class", "mon-name");
    nameTag.innerHTML = this.name;
    monsterTitle.appendChild(nameTag);
    let chineseNameTag = document.createElement("div");
    chineseNameTag.setAttribute("class", "chinese");
    chineseNameTag.innerHTML = this.chineseName;
    monsterTitle.appendChild(chineseNameTag);

    let tagsContainer = document.getElementsByClassName("tags-container")[0];
    let monType1 = document.createElement("div");
    monType1.setAttribute("class", "tag mon-type1");
    monType1.innerHTML = this.tags[0];
    tagsContainer.appendChild(monType1);
    let monType2 = document.createElement("div");
    monType2.setAttribute("class", "tag mon-type2");
    monType2.innerHTML = this.tags[1];
    tagsContainer.appendChild(monType2);

    let women = document.getElementById("women");
    let men = document.getElementById("men");
    this.isGender
      ? (men.style.display = "none")
      : (women.style.display = "none");

    let locationContainer =
      document.getElementsByClassName("location-container")[0];
    let monLocation = document.createElement("div");
    monLocation.setAttribute("class", "mon-location");
    monLocation.innerHTML = this.location;
    locationContainer.appendChild(monLocation);

    let characterContainer = document.getElementsByClassName(
      "character-container"
    )[0];
    let monCharacter = document.createElement("div");
    monCharacter.setAttribute("class", "mon-character");
    monCharacter.innerHTML = this.character;
    characterContainer.appendChild(monCharacter);

    let storyContainer = document.getElementsByClassName("story-container")[0];
    let monStory = document.createElement("div");
    monStory.setAttribute("class", "mon-story");
    monStory.innerHTML = this.story;
    storyContainer.appendChild(monStory);

    let monsterImg = document.getElementsByClassName("monster-img")[0];
    let monImg = document.createElement("img");
    monImg.setAttribute("src", this.image);
    monImg.setAttribute("alt", "monster-image");
    monsterImg.appendChild(monImg);
  }
}

const Sandung = new Monster(
  "요괴닷!",
  "名字",
  ["귀신", "여우"],
  0,
  "산둥성",
  " 눈이 큼, 흰 꼬리 아홉개",
  "이야기는 참 길어요",
  "./img/tiger.png"
);
Sandung.monPopUp();
