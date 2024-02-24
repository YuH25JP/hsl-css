import ColorInHSL from "./colorInHSL";

export default function ThemeGroup({ l }) {
  const colors = l.map((e) => {
    return (
      <ColorInHSL
        key={e[0].toString()}
        colorName={e[0].toString()}
        h={e[1][0] as number}
        s={e[1][1] as number}
        l={e[1][2] as number}
      ></ColorInHSL>
    );
  });
  return <div>{colors}</div>;
}
