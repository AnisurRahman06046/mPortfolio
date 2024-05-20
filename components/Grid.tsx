import { gridItems } from "@/data/gridItems";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titileClassName={item.titleClassName}
            spareImg={item.spareImg}
          ></BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
