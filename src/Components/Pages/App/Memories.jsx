const memoriesArray = [
  {
    location: "Gulshan 1 Dhaka.",
    memoryName: "UNICEF Bangladesh",
    visitedDate: "May 11, 2023",
    imageURL:
      "https://i.ibb.co/427HjB2/bidya-sinha-mim-b467a566d0e7ee6e5122442d53200f19.jpg",
    hashtags: ["#UNICEF Bangladesh", "#UNICEF Bangladesh", "#UNICEF Bangladesh"],
    description:
      "Apex Bangladesh: Innovators in apparel, textiles, and real estate, leading with excellence and ethical practices.",
  },
  {
    location: "Dhaka, Bangladesh",
    memoryName: "UNICEF Bangladesh",
    visitedDate: "December 13, 2023",
    imageURL:
      "https://i.ibb.co/zXYQnfd/395855207-913653960120197-7597048959569618915-n.jpg",
    hashtags: ["#UNICEF Bangladesh", "#UNICEF Bangladesh", "#UNICEF Bangladesh"],
    description:
      "Apex Bangladesh: Innovators in apparel, textiles, and real estate, leading with excellence and ethical practices.",
  },
  {
    location: "Dhaka, Bangladesh",
    memoryName: "UNICEF Bangladesh",
    visitedDate: "December 13, 2023",
    imageURL:
      "https://i.ibb.co/8N9TTdJ/download.jpg",
    hashtags: ["#UNICEF Bangladesh", "#UNICEF Bangladesh", "#UNICEF Bangladesh"],
    description:
      "Apex Bangladesh: Innovators in apparel, textiles, and real estate, leading with excellence and ethical practices.",
  },
  {
    location: "Gazipur, Dhaka",
    memoryName: "VIVO",
    visitedDate: "March 8, 2021",
    imageURL: "https://i.ibb.co/sVthTTT/fotojet-2021-08-24t163157-791.webp",
    hashtags: ["#VIVO", "#VIVO", "#VIVO"],
    description:
      "Oppo Mobile Bangladesh: Redefining smartphone experiences with cutting-edge innovation and style.",
  },
  {
    location: "Dhaka, Bangladesh",
    memoryName: "VIVO",
    visitedDate: "March 8, 2023",
    imageURL: "https://i.ibb.co/QKQQ1F9/images.jpg",
    hashtags: ["#VIVO", "#VIVO", "#VIVO"],
    description:
      "Oppo Mobile Bangladesh: Redefining smartphone experiences with cutting-edge innovation and style.",
  },
  {
    location: "Tangail, Bangladesh",
    memoryName: "VIVO",
    visitedDate: "August 30, 2022",
    imageURL: "https://i.ibb.co/4TKBn6h/Mim-Bidya.webp",
    hashtags: ["#VIVO", "#VIVO", "#VIVO"],
    description:
      "Oppo Mobile Bangladesh: Redefining smartphone experiences with cutting-edge innovation and style.",
  },
  {
    location: "Tangail, Bangladesh",
    memoryName: "মহেড়া জমিদার বাড়ি - টাঙ্গাইল",
    visitedDate: "November 19, 2019",
    imageURL: "https://i.ibb.co/0BL87pM/saree-bidya-sinha-saha-mim-28.webp",
    hashtags: ["#মহেড়া", "#মহেড়া", "#মহেড়া"],
    description:
      "মহেড়া জমিদার বাড়ি, টাঙ্গাইল: একটি ঐতিহাসিক এবং সৌন্দর্যময় স্থান, যেখানে প্রাকৃতিক সৌন্দর্য এবং স্থানীয় সংস্কৃতি মিলে আছে।",
  },
  {
    location: "Bandarban, BD",
    memoryName: "Bandarban Tour",
    visitedDate: "September 26, 2018",
    imageURL: "https://i.ibb.co/ZHwD6fz/unnamed.jpg",
    hashtags: ["#Bandarban", "#Bandarban", "#Bandarban"],
    description:
      "Bandarban, Bangladesh: প্রাকৃতিক সৌন্দর্যে অমূল্য একটি জায়গা।",
  },
];

const Memories = () => {
  return (
    <div>
      <h2 className="text-2xl my-5 font-teko font-300">Memories</h2>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        {memoriesArray.map((dt, index) => {
          return (
            <div key={index} className="relative group">
              <div className="col-span-1 relative h-[200px] overflow-hidden group">
                <div className="relative h-full overflow-hidden">
                  <img
                    src={dt.imageURL}
                    alt=""
                    className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity opacity-0 group-hover:opacity-0"></div>
                <div className="absolute top-5 left-5 transform text-white text-center transition-opacity opacity-100 group-hover:opacity-0">
                  <p className="text-lg font-bold">{dt.memoryName}</p>
                  <p className="text-sm">{dt.visitedDate}</p>
                </div>
              </div>
              <div className="col-span-3 p-4 bg-white bg-opacity-30 h-[200px] overflow-hidden">
                <div className="flex flex-wrap">
                  {dt?.hashtags?.map((hs, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 whitespace-nowrap text-xs bg-gray-300 rounded-md p-[2px] overflow-hidden overflow-ellipsis"
                    >
                      {hs}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{dt.location}</h3>
                <p className="text-gray-600 text-sm overflow-hidden overflow-ellipsis">{dt.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Memories;

