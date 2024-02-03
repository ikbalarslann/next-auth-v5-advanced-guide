import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const Slider = ({ array }: any) => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {array.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center  ">
                  <Image
                    src={item}
                    alt="Pool Image"
                    width={1000}
                    height={1000}
                    className="min-w-full min-h-full rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
