type ServiceCardProps = {
  title: string;
  items: readonly string[];
};

export default function ServiceCard({ title, items }: ServiceCardProps) {
  return (
    <div className="rounded-lg border border-brand-green bg-brand-dark p-6 text-brand-white">
      <h3 className="mb-4 text-xl font-bold text-brand-gold">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-brand-green-light">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}