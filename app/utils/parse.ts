import { ColorSet } from "./types";

export function parseCSS(str: string): ColorSet[] {
  const cssRules = str.split(/[;}\n]/);
  cssRules.forEach((rule, idx) => (cssRules[idx] = rule.trim()));

  let colorSets: ColorSet[] = [];
  // let currentSelector = "";
  cssRules.forEach((rule) => {
    if (rule.includes("{")) {
      const selectorName = rule.split("{")[0].trim();
      // currentSelector = selectorName;
      colorSets.push({
        selector: selectorName,
        colors: [],
      });
    } else if (rule !== "") {
      let [k, v] = rule.split(":");
      const hslInNum = hslStrToNum(v.trim());
      colorSets[colorSets.length - 1].colors.push({
        colorName: k,
        hsl: {
          // ここで範囲外アクセスの可能性があるため要対処
          h: hslInNum[0],
          s: hslInNum[1],
          l: hslInNum[2],
        }
      })
    }
  });
  return colorSets;
}

export function hslStrToNum(str: string) {
  const splitted = str.split(" ");
  return splitted.map((x) => {
    return Number(x.replace("%", ""));
  });
}
