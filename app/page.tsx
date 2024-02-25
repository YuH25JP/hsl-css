"use client";
import { Textarea } from "@/components/ui/textarea";
import { useMemo, useState } from "react";
import { hslStrToNum, parseCSS } from "./utils/parse";
import ThemeGroup from "./components/themeGroup";
import { Button } from "@/components/ui/button";
import { Heart, RefreshCw } from "lucide-react";

export default function Home() {
  const [textareaContent, setTextareaContent] = useState("");
  const colorSets = useMemo(() => {
    try {
      let parsed = parseCSS(textareaContent);
      console.log(parsed);
      return parsed;
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }, [textareaContent]);
  const colorGroups = colorSets?.map((colorSet) => (
    <ThemeGroup key={colorSet.selector} colorSet={colorSet}></ThemeGroup>
  ));

  const handleReset = () => {
    setTextareaContent("");
  };

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
