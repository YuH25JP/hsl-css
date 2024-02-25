"use client";
import { Input } from "@/components/ui/input";
import { hslToHex } from "../utils/colors";
// import styled from 'styled-jsx'
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";

export default function ColorInHSL({
  colorName,
  h,
  s,
  l,
}: {
  colorName: string;
  h: number;
  s: number;
  l: number;
}) {
  const colorInHex = hslToHex(h, s, l);
  return (
    <div className="grid grid-cols-12 gap-2 items-center mb-3">
      <div className="col-span-3 font-mono">{colorName}</div>
      <HoverCard>
        <HoverCardTrigger asChild>
          <div
            className="col-span-3 w-full h-full rounded-sm hover:outline outline-offset-2 outline-2"
            style={{ backgroundColor: colorInHex }}
          ></div>
        </HoverCardTrigger>
        <HoverCardContent className="w-auto">
          <div className="text-xl font-bold">{colorName}</div>
          <Separator />
          <div className="grid grid-cols-4 items-center">
            <div className="col-span-1">Hex</div>
            <div className="col-span-2 font-mono text-extrabold underline">{colorInHex}</div>
            <Button size="icon" variant="ghost" className="rounded-full">
              <Clipboard className="h-4 w-4"/>
            </Button>
            <div className="col-span-1">HSL</div>
            <div className="col-span-2 font-mono text-extrabold underline">{h}/{s}%/{l}%</div>
            <Button size="icon" variant="ghost" className="rounded-full">
              <Clipboard className="h-4 w-4"/>
            </Button>
          </div>
        </HoverCardContent>
      </HoverCard>
      {/* <div
        className="col-span-3 w-full h-full rounded-sm hover:outline outline-offset-2 outline-2"
        style={{ backgroundColor: colorInHex }}
      ></div> */}
      {/* <input
        type="color"
        defaultValue={colorInHex}
        className="col-span-3 rounded-sm w-full h-full"
        style={{ backgroundColor: colorInHex }}
      ></input> */}
      {/* <ColorBox className="col-span-3 w-full h-full rounded-sm" $colorInHex={colorInHex}></ColorBox> */}
      <div className="col-span-2">
        <Input defaultValue={h} />
      </div>
      <div className="col-span-2">
        <Input defaultValue={s} />
      </div>
      <div className="col-span-2">
        <Input defaultValue={l} />
      </div>
    </div>
  );
}
