import HomeWrapper from "@/widgets/homewrapper";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <HomeWrapper />;
}
