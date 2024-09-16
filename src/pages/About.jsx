const aboutContent = [
  {
    header: "About Football",
    subHeader:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt iure molestias laboriosam molestiae, beatae saepe, minus estpariatur dignissimos omnis voluptas nostrum consequatur soluta necessitatibus esse eum provident? Voluptate.",
  },
  {
    header: "About Football",
    subHeader:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt iure molestias laboriosam molestiae, beatae saepe, minus estpariatur dignissimos omnis voluptas nostrum consequatur soluta necessitatibus esse eum provident? Voluptate.",
  },
  {
    header: "About Football",
    subHeader:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt iure molestias laboriosam molestiae, beatae saepe, minus estpariatur dignissimos omnis voluptas nostrum consequatur soluta necessitatibus esse eum provident? Voluptate.",
  },
  {
    header: "About Football",
    subHeader:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt iure molestias laboriosam molestiae, beatae saepe, minus estpariatur dignissimos omnis voluptas nostrum consequatur soluta necessitatibus esse eum provident? Voluptate.",
  },
];

function About() {
  return (
    <div className="flex flex-col pr-0 sm:flex-row sm:pr-6">
      <img
        src="https://picsum.photos/600"
        className="sm:inset-0 sm:w-[50vw]"
        alt=""
      />
      <div className="flex w-full flex-wrap items-center justify-center pl-0 sm:pl-6">
        {aboutContent.map((obj, i) => {
          return (
            <p
              key={i}
              className="mt-3 flex w-1/2 flex-col items-center sm:w-auto sm:flex-row"
            >
              <i className="fa-solid fa-futbol fa-2x mb-2 pr-4 sm:mb-0"></i>
              <span className="flex flex-col">
                <span className="text-center sm:text-start">{obj.header}</span>
                <span className="line-clamp-6 h-12 text-balance text-center text-xs sm:line-clamp-3 sm:text-start">
                  {obj.subHeader}
                </span>
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default About;
