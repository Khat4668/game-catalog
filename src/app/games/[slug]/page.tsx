export default async function Game({ params }: PageProps<"/games/[slug]">) {
  const { slug } = await params;
  return (
    <div className="flex items-center justify-center">
      <h1>Game: {slug}</h1>
    </div>
  );
}
