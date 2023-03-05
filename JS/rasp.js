"use strict";
const Day = prompt("Bugun qaysi kun", "");
switch (Day) {
  case "dushanba":
    console.log("matematika(seminar)\nmatematika(maruza)\ndasturiy taminot ");
    break;
  case "seshanba":
    console.log("dars yo'q");
    break;
  case "chorshanba":
    console.log(
      "iqtisod nazariyasi(seminar)\niqtisod nazariyasi(maruza)\niakt"
    );
    break;
  case "payshanba":
    console.log("j/tarbiya\ntarix(maruza)\ntarix(seminar)");
    break;
  case "juma":
    console.log("iakt(seminar)\ndasturiy taminot(seminar)\ntyutorlik soati");
    break;
  case "shanba":
    console.log("dasturlash(maruza)\ndasturlash(seminar)");
    break;
  default:
    console.log("dam olish");
    break;
}
