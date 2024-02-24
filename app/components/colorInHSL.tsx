"use client";
import { Input } from "@/components/ui/input";
import { hslToHex } from "../utils/colors";
// import styled from 'styled-jsx'

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
      <div className="col-span-3 w-full h-full rounded-sm hover:outline outline-offset-2 outline-2" style={{backgroundColor: colorInHex}}></div>
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
