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
    if (this.tags[1] !== undefined) {
      let monType2 = document.createElement("div");
      monType2.setAttribute("class", "tag mon-type2");
      monType2.innerHTML = this.tags[1];
      tagsContainer.appendChild(monType2);
    }

    let women = document.getElementById("women");
    let men = document.getElementById("men");
    this.isGender
      ? ((men.style.display = "none"), (women.style.display = "block"))
      : ((women.style.display = "none"), (men.style.display = "block"));

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

  deletePopUp() {
    let monsterTitle = document.getElementsByClassName("monster-title")[0];
    while (monsterTitle.firstChild) {
      monsterTitle.removeChild(monsterTitle.firstChild);
    }

    let tagsContainer = document.getElementsByClassName("tags-container")[0];
    while (tagsContainer.firstChild) {
      tagsContainer.removeChild(tagsContainer.firstChild);
    }

    let locationContainer =
      document.getElementsByClassName("location-container")[0];
    while (locationContainer.childNodes.length >= 3) {
      locationContainer.removeChild(locationContainer.childNodes[2]);
    }

    let characterContainer = document.getElementsByClassName(
      "character-container"
    )[0];
    while (characterContainer.childNodes.length >= 3) {
      characterContainer.removeChild(characterContainer.childNodes[2]);
    }

    let storyContainer = document.getElementsByClassName("story-container")[0];
    while (storyContainer.childNodes.length >= 3) {
      storyContainer.removeChild(storyContainer.childNodes[2]);
    }

    let monsterImg = document.getElementsByClassName("monster-img")[0];
    while (monsterImg.firstChild) {
      monsterImg.removeChild(monsterImg.firstChild);
    }
  }
}

const monsterPop = document.querySelector(".monster-pop");
const target = document.querySelectorAll(".item");

for (let i = 0; i < target.length; i++) {
  target[i].addEventListener("click", function () {
    monsterPop.style.display = "block";
    let targetID = this.getAttribute("id");
    new Function(targetID + ".deletePopUp();")();
    new Function(targetID + ".monPopUp();")();
  });
}

const SinSeon = new Monster(
  "성선",
  "成仙",
  ["신선"],
  0,
  "산둥성",
  "머리에 누런 두건을 쓰고 학의 깃털로 짠 도포를 입고 다님.",
  "주생과 성생은 동문 수학하며 절친한 친구 사이이다. 살림이 어려운 성생을 보살펴주던 주생은 어느 날, 권세가의 눈에서 벗어나 억울한 누명을 쓰게 된다. 자신을 아끼던 주생이 감옥에서 고문을 받자 성생은 방법을 가리지 않고 그를 풀어주려 노력한다. 가까스로 살아나온 주생은 다시 아내와 함께 행복한 삶을 살지만, 일련의 사건을 옆에서 겪은 성생은 세상에 회의를 느껴 속세에서 벗어나게 된다. 몇 년 후 도사가 되어 다시 돌아온 성생은 주생도 함께 속세에서 벗어나게 하려 그와 영혼을 바꾼다. 자신의 진짜 몸을 찾으러 성생을 찾아나선 주생은 그와 함께 지내다 집으로 돌아온다. 하지만, 집에 돌아왔을 때 자신의 아내가 자신이 투옥했을 때부터 사내종과 불건전한 관계였음을 알게 되고 피의 복수를 한다. 세상에 환멸을 느낀 주생은 성생과 같이 속세에서 벗어나 도사로 살게 된다.",
  "./img/man.png"
);
const SeoSaeng = new Monster(
  "곽 수재",
  "郭秀才",
  ["서생"],
  0,
  "광둥성",
  "한밤중에 산 속에서 기이한 사람들과 마주쳤다 주장함.",
  "곽 수재는 밤에 집으로 가다 산에서 길을 잃는다. 사람들 소리가 들리기에 그 쪽으로 가보니 여러 사람이 산 속에서 술을 마시고 있었다. 술을 좋아하던 곽생은 술자리에 껴서 열심히 마시다가, 새소리를 내는 재주를 뽐낸다. 즐겁게 같이 마시던 사람들은 중추절에도 또 다시 만나자 곽생에 약조하고 '어깨 밟기'를 보여준다. 어깨 밟기는 사람 위에 사람이 올라가는 것으로 십여 명이 올라타 하늘 속까지 뻗어나간다. 이후 일자 그대로 땅바닥으로 엎어져 길이 만들어졌고 곽생은 이를 따라 안전히 집으로 오게 된다. 중추절에 다시 그들을 보러 가려 했지만, 이 이야기를 들은 친구들이 그를 말린다. 곽생이 그 길 다시 가보지만 찾을 수가 없었다고 한다.",
  "./img/man.png"
);
const Pigeon = new Monster(
  "합이",
  "鴿異",
  ["동물", "비둘기"],
  0,
  "산둥성 추평현",
  "인간의 생김새를 함. 신비로운 비둘기들과 함께 다님.",
  "비둘기 애호가 장유량은 자신이 모은 비둘기들을 애지중지 키워왔다. 그러던 중, 한 젊은이가 그에게 접근해 묘기를 부리는 희고 아름다운 비둘기들을 보여주었다. 장유량은 애걸복걸하여 그 젊은이로부터 신비한 비둘기 한 쌍을 얻어왔다. 이를 잘 키우던 장유량은 아버지의 친구가 비둘기에 관한 관심을 보이자, 그분의 높은 신분을 거역할 수는 없다고 여겨 신비한 비둘기 한 쌍이 낳은 새끼 비둘기를 아버지의 친구에게 보낸다. 그러나 그 사람은 그 새들의 가치를 알아보지 못하고 삶아 먹었고 과거 그 젊은이가 찾아와 매우 화를 내며 비둘기로 변하여 자신이 줬던 비둘기들을 데리고 떠나게 된다. 그 젊은이는 비둘기의 신이었고, 장유량은 자신이 아끼던 비둘기들을 신분의 고저를 의식하여 그렇게 잃었다는 사실에 원통하여 남은 비둘기들도 모두 처분하고 만다.",
  "./img/pigeon.png"
);
const Snake = new Monster(
  "사인",
  "蛇人",
  ["동물", "뱀"],
  0,
  "허난성",
  "두 형제 뱀. 화가 나면 사람을 해침.",
  `동군에는 뱀 공연을 직업으로 삼는 한 사람이 있었다. 그는 큰 뱀 대청, 작은 뱀 이청을 길렀는데, 그 중에서도 이청은 매우 민첩했다. 대청이 죽은 후 그는 대청을 대신할 만한 뱀을 찾지 못했다. 산 사원에서 하룻밤을 묵은 다음 날, 이청도 사라졌다. 공연자는 사방을 뒤졌지만 아무런 흔적도 찾을 수 없었다. 실망하던 중, 그는 풀숲이 바스락거리는 소리에 이청이 작은 뱀을 데리고 돌아온 것을 발견했다. 그는 기쁜 마음으로 작은 뱀에게 소청이라는 이름을 붙이고 훈련을 시키며 함께 공연을 하여 많은 돈을 벌었다.  
  더 이상 공연을 할 수 없을 정도로 몸집이 커진 이청은 산에서 자라며 사람들을 쫓아다녔다. 마을 사람들 사이에 산에 큰 뱀이 나타나니 조심하라는 소문이 돌고, 아무도 이청이 사는 지역을 지나가지 않았다. 어느 날, 그 지역을 지나가던 공연자가 뱀에게 쫓겼다. 뱀은 그의 몸을 칭칭 옭아맸다. 그때, 공연자는 뱀의 머리에 붉은 점을 보고 이청임을 깨닫고 멈추라고 소리쳤다. 이청은 공연자의 짐보따리를 머리로 쿡쿡 찔렀다. 공연자는 이청이 보따리 속에 담긴 소청을 원한다는 것을 깨닫고 소청을 풀어주며, 사람들을 해치지 말라고는 작별 인사를 하고 떠났다.`,
  "./img/snake.png"
);
const GhostMan = new Monster(
  "축옹",
  "祝翁",
  ["귀신", "남자"],
  0,
  "산둥성",
  "죽다 살아난 할아버지 귀신. 사랑꾼임.",
  `제양(济阳)군의 주씨 마을, 50대 초반인 주 영감이 병으로 죽었다. 가족들이 상복을 입고 애도하던 중, 갑자기 주 영감이 급히 소리치는 소리가 들렸다. 가족들이 시체가 안치된 곳으로 달려가 보니 주 영감이 이미 부활했다. 모두 기뻐하며 다가갔지만, 주 영감은 아내에게만 말했다. “처음엔 이승으로 다시 돌아오지 않을 것이라고 다짐했소. 허나 길을 가다 보니 부인이 떠올랐소. 부인도 노쇠한 몸만 이승에 남아, 배를 굶지 않기 위해 자식들이나 다른 이에게 의존해야 하고, 즐거움 없는 삶을 살 것이라 생각했소. 그럴 바에는 나와 함께 가는 것이 좋지 않겠소? 하여 부인을 데리러 왔소.”

  아내는 웃으며 움직이지 않았고, 주 영감은 계속해서 그녀를 재촉했다. 그녀는 더 이상 그의 말에 거스를 수 없어 예쁜 차림을 하고 나왔다. 주 영감은 이제 준비가 되었으니 자신의 옆에 누우라 하였다. 

  가족들은 나란히 누운 둘을 보고 웃음을 터뜨렸다. 그러나 잠시 후, 아내의 웃음이 갑자기 사라지고 점점 눈을 감았다. 가족들은 아내가 오랫동안 소리 없이 누워있는 모습에, 가까이 다가가 확인해보니 아내의 몸은 이미 차갑게 식고 숨이 멎었다. 주 영감도 마찬가지였다. 가족들은 경악을 금치 못했다. 이후 고종 21년에 주 영감의 형제가 왕실에서 일할 때, 이 이야기를 하여 민간에 전해졌다고 한다.`,
  "./img/ghost_boy.png"
);
const FoxWoman = new Monster(
  "교낭",
  "娇娜",
  ["동물", "여우"],
  1,
  "광둥성",
  "예쁜 여우 부인. 사람보다도 착함.",
  `옛날 옛적에, 공자의 후생이자 성격이 온화하고 시를 잘 짓기로 유명한 공설립이라는 서생이 있었다. 그는 현지의 보도사에서 경전을 쓰는 승려가 되었다.

  눈이 펑펑 내리던 어느 날, 사원 근처 저택을 지나가던 공설립은 아름다운 젊은이를 만났다. 젊은이는 공설립을 저택에 초대해 둘은 금방 친구가 되었습니다. 청년은 자신이 단 씨 집안의 주인이 아니라 황푸 가의 자식이며, 자신의 집이 화재로 불타는 바람에 잠시동안 여기에 살고 있는 것뿐이라고 하였습니다.
  
  시간이 지나며 두 사람은 더욱 가까워졌습니다. 공설립은 황부의 지인인 아름다운 여인 아송을 만나 그녀와 결혼하게 되었습니다.
  
  어느 날, 황부씨는 곧 대재앙을 맞이할 것이라며 공설립에게 도움을 청했습니다. 공설립은 구체적인 상황을 이해하지 못했지만 망설임 없이 그를 도왔습니다. 번개와 폭풍이 몰아치는 가운데, 공설립은 목숨을 걸고 황부 일가를 구하기 위해 저택 문 앞에 서서 재난을 막으려 했습니다. 치열한 사투 속에서 그는 황부 일가를 구해냈지만, 자신은 번개에 맞아 사망했습니다.
  
  모두가 슬퍼하던 와중, 공설립의 부인 교낭이 기적을 선보였습니다. 그녀는 붉은 알약과 신비한 도술로 공설립을 죽음에서 다시 살려냈습니다. 되살아난 공설립은 저택을 예쁘게 꾸미고, 부인과 함께 예쁜 아이도 낳았습니다. 어린 아들은 성장하여 영리하고 똑똑한 젊은이가 되었습니다.`,
  "./img/fox.png"
);
const FoxMan = new Monster(
  "구산왕",
  "九山王",
  ["동물", "여우"],
  0,
  "광둥성",
  "겉보기엔 평범한 노인이지만, 대가족을 거느린 여우.",
  `황무지를 갖고 있던 평범한 서생 이생은 어느날 한 노인이 찾아와 아무 쓸모 없는 황무지에 셋집을 지어 살겠다며 백냥의 돈을 그의 손에 쥐어주었다. 노인은 황무지에 집을 금세 짓고 호화롭게 꾸민 뒤, 가족 행사에 이생을 초대했다. 그러나 이생은 이를 괴이하게 여겨 여우의 짓이라고 생각하고, 노인이 자리를 비운 사이에 불을 질러 그의 일가족 모두가 죽었다. 노인은 자신이 이생에 원수를 진 적도 없고, 오히려 빈 땅에 돈까지 치렀다며 이생에 크게 앙심을 품었다.

  몇 년 뒤 이생은 단란한 가정을 이루었고, 마을에 용한 점쟁이가 찾아와 이생에게 훗날 왕이 될 사주라며 군대를 준비하고 전쟁을 일으키라고 이생을 부추겼다. 이생은 처음에는 믿지 않았지만, 점쟁이의 확신에 찬 말에 넘어가 난을 일으켰고 그 일로 이생의 일가족이 모두 죽었다. 그제서야 이생은 그 점쟁이가 노인인 사실을 깨달았다.`,
  "./img/fox.png"
);
const Moran = new Monster(
  "갈건 - 모란꽃",
  "葛巾",
  ["선녀"],
  1,
  "허난성 낙양",
  "눈부시게 아름다운 여자. 백옥같은 피부와 난초와 같은 오묘한 향을 가짐.",
  `모란을 광적으로 좋아하는 상대용은 조주의 모란이 제일이라는 말을 듣고 조주로 떠났는데, 조주에서 본 아름다운 여인의 용모에 첫 눈에 반했다. 여인이 너무 아름다워 선녀라고 확신하고, 그를 붙잡으려 했지만 여인을 키워준 노파에 가로막혀 그를 놓쳤다. 이후 상대용은 시름시름 앓아 병이 났고, 사흘 뒤 노파가 찾아와 그에게 탕약을 먹였다. 상대용은 그 여인이 자신을 벌하려 독약을 보냈다 생각하고 죽음을 각오하고 다 마셨으나, 그 탕약은 그의 병을 낫게 하는 명약이었다.

  병이 나은 상대용은 여인을 찾기 위해 찾아나섰는데, 다시 여인을 마주친 그는 여인이 알려준 그의 거처로 가기 위해 궁리한다. 여인의 거처로 숨어든 상대용은 여인의 사촌동생 옥판의 눈을 피해 침대 아래로 숨는다. (사진)
  
  그의 결의가 마음에 든 여인은 그와 결혼하기 위해 옥판과 상대용의 형도 함께 결혼하기로 계략을 세워 노파를 속였다. 이후 결혼하여 같이 살게 된 두 부부는 행복하게 살며 아이도 낳았으나, 상대용은 마음 속으로 여인이 선녀라고 여전히 의심하였다. 따라서 여인이 알려준 자신의 옛날 이야기에 따라 조주의 위씨 가문을 찾아나섰으나, 그런 가문은 찾지 못해 의심은 더욱 커졌다. 의심을 알게 된 여인은 자신이 몸 바쳐 사랑했음에도 자신을 신뢰하지 못하는 상대용에게 크게 실망하여 자신과 옥판의 아이를 바닥에 버리고 옥판과 사라졌다. 상대용은 자신이 의심한 것을 뉘우쳤지만, 여인은 돌아오지 않았고 아이를 버린 자리에는 모란이 자라 낙양 전체로 퍼져 지금까지도 낙양을 아름답게 물들이고 있다.`,
  "./img/skywoman.png"
);
const Tiger = new Monster(
  "장성 - 의좋은 형제",
  "張誠",
  ["동물", "호랑이"],
  0,
  "허난성",
  "의좋은 형제의 동생을 입에 물고 갈만큼 무섭다.",
  `가난한 가정에서 계모의 학대를 받으며 자란 눌과 성은 서로를 의지하며 계모의 구박을 견디며 살았다. 어느 날 형제는 마을 사람들과 나무를 하던 중 호랑이를 마주쳤고, 호랑이는 동생 성을 입에 물고 자리를 떠났다. 형 눌은 호랑이를 따라잡아 도끼로 호랑이의 허벅지를 내리쳤지만, 멈추기는 커녕 더 빨리 달려 형제는 생이별하게 되었다.

  이후 형 눌은 동생 성을 찾으러 이승과 저승의 경계로 떠났고, 거기서 성을 다시 만나 원래 살던 곳으로 돌아가 아버지와 행복하게 살았다.`,
  "./img/tiger.png"
);
