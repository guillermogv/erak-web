interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="rounded-lg border border-border bg-card p-6 text-center">
      <p className="text-3xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-sm font-medium uppercase text-muted-foreground">{label}</p>
    </div>
  );
};

export default StatCard;
