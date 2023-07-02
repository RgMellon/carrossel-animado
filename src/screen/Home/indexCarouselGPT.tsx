import { Carousel } from "./carousel";

export function Home() {
  const data = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    // Add more items as needed
  ];

  // Inside your app component
  return <Carousel data={data} />;
}
