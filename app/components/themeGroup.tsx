import { ColorSet } from "../utils/types";
import ColorInHSL from "./colorInHSL";

export default function ThemeGroup({ colorSet }: { colorSet: ColorSet }) {
  const colors = colorSet.colors.map((e) => {
    return (
      <>
        <ColorInHSL
          // key={e[0].toString()}
          colorName={e.colorName}
          h={e.hsl.h}
          s={e.hsl.s}
          l={e.hsl.l}
        ></ColorInHSL>
      </>
    );
  });
  return (
    <>
      <div className="border-2 border-muted-foreground rounded-md p-2 mb-2 text-xl">
        {colorSet.selector}
      </div>
      <div>{colors}</div>
    </>
  );
}
