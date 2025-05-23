import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../ui/dragable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Kolkata",
      image:
        "https://img.freepik.com/premium-vector/outline-kolkata-india-city-skyline-with-color-buildings-isolated-white_119523-9052.jpg?uid=R135059889&ga=GA1.1.1918914287.1739298480&semt=ais_hybrid&w=740",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Jaipur",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-india-travel-poster_23-2149761500.jpg?uid=R135059889&ga=GA1.1.1918914287.1739298480&semt=ais_hybrid&w=740",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Pune",
      image:
        "https://img.freepik.com/premium-vector/outline-pune-india-city-skyline-with-white-buildings-illustration_119523-1649.jpg?uid=R135059889&ga=GA1.1.1918914287.1739298480&semt=ais_hybrid&w=740",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Gurugram",
      image:
        "https://img.freepik.com/premium-vector/gurgaon-india-city-skyline-with-gray-buildings-isolated-white-vector-illustration-business-travel-tourism-concept-with-modern-architecture-gurgaon-cityscape-with-landmarks_119523-6933.jpg?uid=R135059889&ga=GA1.1.1918914287.1739298480&semt=ais_hybrid&w=740",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Bengaluru",
      image:
        "https://img.freepik.com/free-vector/bangalore-india-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-presentation-banner-website_596401-365.jpg?uid=R135059889&ga=GA1.1.1918914287.1739298480&semt=ais_hybrid&w=740",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Mumbai",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-mumbai-illustration_23-2149447058.jpg?uid=R135059889&ga=GA1.1.1918914287.1739298480&semt=ais_hybrid&w=740",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Delhi",
      image:
        "https://img.freepik.com/free-vector/illustration-indian-landmarks_53876-2811.jpg?uid=R135059889&ga=GA1.1.1918914287.1739298480&semt=ais_hybrid&w=740",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Your city not in the deck?? Don't worry, We are expanding like bacteria
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
