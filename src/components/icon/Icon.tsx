import { IconProps } from "@/types/icon";

function Icon({ id, className }: IconProps) {
  return (
    <svg
      className={className}
      width={28}
      height={28}
      fill="none"
      stroke="currentColor"
    >
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
}

export default Icon;
