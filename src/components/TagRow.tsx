export interface TagRowProps {
  readonly tags: readonly string[];
  readonly tealIndexes?: readonly number[];
}

export function TagRow({ tags, tealIndexes = [] }: Readonly<TagRowProps>) {
  return (
    <div className="tag-row">
      {tags.map((tag, index) => (
        <span key={`${tag}-${index}`} className={`tag${tealIndexes.includes(index) ? " tag--teal" : ""}`}>
          {tag}
        </span>
      ))}
    </div>
  );
}
