interface SectionHeaderProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ id, eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="section-header__eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-header__description">{description}</p> : null}
    </div>
  );
}
