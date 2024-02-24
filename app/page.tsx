"use client";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useMemo, useState } from "react";
import { hslStrToNum, parseCSS } from "./utils/parse";
import ThemeGroup from "./components/themeGroup";
import { Button } from "@/components/ui/button";
import { Heart, RefreshCw } from "lucide-react";

export default function Home() {
  const [textareaContent, setTextareaContent] = useState("");
  const hslInNum = useMemo(() => {
    let res = [];
    let [properties, selectors] = parseCSS(textareaContent);
    for (const elem of properties) {
      let entries = Object.entries(elem);
      const entriesInNum = entries.map((v) => {
        return [v[0], hslStrToNum(v[1])];
      });
      res.push(entriesInNum);
    }
    console.log(res);
    return res;
  }, [textareaContent]);
  const colorGroups = hslInNum.map((v) => <ThemeGroup l={v}></ThemeGroup>);

  const handleReset = () => {
    setTextareaContent('');
  }

  // useEffect(() => {
  //   try {
  //     // console.log(parseCSS(textareaContent));
  //   } catch (error) {
  //     console.log(`error: ${error}`);
  //   }
  //   // console.log(textareaContent)
  // }, [textareaContent]);

  return (
    <main className="p-4 flex gap-2">
      <div className="bg-secondary rounded-lg p-4 w-1/2">
        <Textarea
          className="font-mono"
          onChange={(e) => setTextareaContent(e.target.value)}
          value={textareaContent}
          placeholder="Input CSS Here"
        />
        <Button className="mt-3 w-full">
          <Heart className="mr-2 h-4 w-4" />
          Favorite
        </Button>
        <Button className="mt-2 w-full bg-destructive" onClick={handleReset}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset
        </Button>
        {/* <div>{textareaContent}</div> */}
        {/* <div className={clsx(`${"bg-[#bb8211]"}`, 'h-12', 'w-12')}></div> */}
      </div>
      <div className="bg-secondary rounded-lg w-1/2 p-4">
        {colorGroups}
        {/* <ColorInHSL colorName="--primary" h={90} s={83} l={40}></ColorInHSL> */}
      </div>
      {/* <div>{hslInNum}</div> */}
    </main>
  );
}
