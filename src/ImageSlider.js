import React, { useEffect, useState } from "react";

const data = [
  "https://www.shutterstock.com/shutterstock/photos/2236837745/display_1500/stock-vector-silhouette-of-a-samurai-in-the-night-background-oni-mask-japanese-samurai-warrior-with-a-sword-2236837745.jpg",
  "https://cutewallpaper.org/21/shinobi-wallpapers/Shinobi-Wallpapers-876J89Q,-0.54-Mb-Picserio.com.jpg",
  "https://e0.pxfuel.com/wallpapers/374/124/desktop-wallpaper-samurai-champloo-mugen-scary-samurai.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7f915900-b306-4594-a3fa-81ac18c4be0f/ddx8e5q-b33bc331-2be1-497a-abec-0f1719ca3448.jpg/v1/fill/w_1192,h_670,q_70,strp/yoriichi_tsugikuni_by_darktrekk_ddx8e5q-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvN2Y5MTU5MDAtYjMwNi00NTk0LWEzZmEtODFhYzE4YzRiZTBmXC9kZHg4ZTVxLWIzM2JjMzMxLTJiZTEtNDk3YS1hYmVjLTBmMTcxOWNhMzQ0OC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2tF6HzoUEtCoS1aW6-_1SjBW-9ng77PZHKhBmDmT-8w",
  "https://wallpaper.dog/large/17089592.jpg",
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    setActiveIndex(activeIndex >= data.length - 1 ? 0 : activeIndex + 1);
  };

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextClick();
    }, 1000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className="flex justify-center w-full">
      <button onClick={handlePrevClick} className="font-bold m-10 p-2">
        Prev
      </button>
      {data.map((url, i) => (
        <img
          key={url}
          className={
            "w-[700px] h-[500px] object-contain " +
            (activeIndex === i ? "block" : "hidden")
          }
          src={url}
          alt="wallpaper"
        />
      ))}

      <button onClick={handleNextClick} className="font-bold m-10 p-2">
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
