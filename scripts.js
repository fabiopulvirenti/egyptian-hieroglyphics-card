const alphabet = {
  a: "&#78143",
  b: "&#78016",
  c: "&#78753",
  d: "&#77991",
  e: "&#78284",
  f: "&#78225",
  g: "&#78780",
  h: "&#78747",
  i: "&#78283",
  j: "&#78227",
  k: "&#78753",
  l: "&#78061",
  m: "&#78163",
  n: "&#78358",
  o: "&#78703",
  p: "&#78506",
  q: "&#78350",
  r: "&#77963;",
  s: "&#78580",
  t: "&#78799",
  u: "&#78193",
  v: "&#78225",
  w: "&#78193",
  y: "&#78284",
  z: "&#78467;",
};

const professionList = {
  pharaoh: "&#77879 &#77896",
  teacher: "&#78580 &#78016 &#78332 &#78143 &#78284 &#78799 &#78811",
  student: "&#78580 &#78263 &#78143 &#78829 &#78189 &#77896",
  priest: "&#78193 &#77981 &#78016 &#77830",
  healer: "&#78580 &#78193 &#77991 &#78861 &#77981 &#78753",
  soldier: "&#77838 &#77824 &#78826",
  craftsman: "&#78580 &#78243 &#77963 &#78193",
};

nameElement = document.getElementById("floatingInputName");
lastnameElement = document.getElementById("floatingInputLastname");
professionElement = document.getElementById("floatingSelectProfession");

modalNameLineElement = document.getElementById("modalNameLine");
modalProfessionLineElement = document.getElementById("modalProfessionLine");

function translateAndShow() {
  console.log("Name Element value:", nameElement.value);
  console.log("Lastname Element value:", lastnameElement.value);
  console.log("Profession Element value:", professionElement.value);

  nameValue = nameElement.value;
  lastnameValue = lastnameElement.value;
  professionValue = professionElement.value;

  translatedName = translate(nameValue);
  translatedLastName = translate(lastnameValue);

  modalNameLineElement.innerHTML =
    translatedName + " <br/> " + translatedLastName;
  modalProfessionLineElement.innerHTML = translateProfession(professionValue);
}

function translate(name) {
  let output = "";

  for (i = 0; i < name.length; i++) {
    let tmp = name[i];
    let letter = tmp.toLowerCase();
    console.log("letter", letter);
    if (letter in alphabet) {
      y = alphabet[letter];
      output = output + y;
    }
  }
  return output;
}

function translateProfession(profession) {
  if (profession in professionList) {
    z = professionList[profession];
  }
  return z;
}
