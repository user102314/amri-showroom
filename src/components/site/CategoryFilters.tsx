import { CATEGORIES, type Category } from "@/data/products";

export function CategoryFilters({
  value,
  onChange,
}: {
  value: Category | "all";
  onChange: (value: Category | "all") => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {[{ id: "all" as const, label: "Tout" }, ...CATEGORIES].map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onChange(cat.id)}
          className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
            value === cat.id
              ? "border-transparent bg-plum-gradient text-primary-foreground"
              : "border-border text-muted-foreground hover:bg-secondary hover:text-primary"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
