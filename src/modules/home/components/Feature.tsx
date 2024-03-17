type FeatureProps = {
  title: string;
  description: string;
};

export default function Feature({ title, description }: FeatureProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
