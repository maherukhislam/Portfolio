export interface BackgroundProps {
  readonly decorative?: boolean;
}

export function Background({ decorative = true }: Readonly<BackgroundProps>) {
  if (!decorative) {
    return null;
  }

  return (
    <div className="background" aria-hidden="true">
      <div className="background__grid" />
      <div className="background__glow background__glow--left" />
      <div className="background__glow background__glow--right" />
    </div>
  );
}
