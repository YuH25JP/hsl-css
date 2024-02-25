export function parseCSS(str: string) {
  const cssRules = str.split(/[;}\n]/);
  cssRules.forEach((rule, idx) => (cssRules[idx] = rule.trim()));
  //   console.log(cssRules);
  let res: Record<string, string>[] = [];
  let selectors: string[] = [];
  //   let currentSelector = "";
  cssRules.forEach((rule) => {
    if (rule.includes("{")) {
      const selectorName = rule.split("{")[0].trim();
      selectors.push(selectorName);
      res.push({});
    } else if (rule !== "") {
      let [k, v] = rule.split(":");
      res[res.length - 1][k.trim()] = v.trim();
    }
  });
  return [res, selectors];
}

export function hslStrToNum(str: string) {
  const splitted = str.split(" ");
  return splitted.map((x) => {
    return Number(x.replace("%", ""));
  });
}
