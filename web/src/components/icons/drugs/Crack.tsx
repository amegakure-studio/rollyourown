import { Icon, IconProps } from "..";

export const Crack = (props: IconProps) => {
  return (
    <Icon {...props}>
      <>
        <rect x="2" y="2.5" width="20" height="20" rx="1" fill="url(#crack)" />
        <defs>
          <pattern
            id="crack"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1_288" transform="scale(0.0625)" />
          </pattern>
          <image
            id="image0_1_288"
            width="16"
            height="16"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAAAR0lEQVQ4EWNgGAW0DYH/rzP/gzA+W5jwSRIjx4JNEdxW3gSw9P/XDGBXMIpOZ0RXT10XoNvM8HkBxEI8LqHYBeheGuWTEQIAJj0XX8U8mwcAAAAASUVORK5CYII="
          />
        </defs>
      </>
    </Icon>
  );
};