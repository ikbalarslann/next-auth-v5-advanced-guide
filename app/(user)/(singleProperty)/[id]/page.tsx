import { getPropertyById } from "@/data/property";
import DatePickerForm from "@/components/user/date-form";
import Slider from "@/components/user/slider";

const SinglePropertyPage = async ({ params }: any) => {
  const { id } = params;
  const property = await getPropertyById(id);
  const array = property?.imgUrls;

  return (
    <div className="flex flex-col">
      <h1 className="text-6xl pb-3 text-blue-100">{property?.title}</h1>

      <Slider array={array} />

      <h2 className="text-red-50 py-3 text-center">{property?.description}</h2>
      <div className="pl-6">
        <p>Depth of the pool is {property?.depth}m</p>
        <p>Type : {property?.type} pool</p>
        <p>Check in time: 8am</p>
        <p>Check out time: 11pm</p>
        <p className="pb-6">Adress : {property?.location}</p>
      </div>

      <div className="pb-6">
        <DatePickerForm property={property} />
      </div>
    </div>
  );
};

export default SinglePropertyPage;
