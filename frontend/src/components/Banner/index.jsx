import { useGetBannersQuery } from "../../api/api";

const Banner = () => {
  const { data: banners, isLoading, isError, error } = useGetBannersQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error:{error.message}</div>;
  }
  return <>
  <div className="max-w-7xl mx-auto">
  {banners.map((banner) => (
        <img key={banner.id} src={banner.imageUrl} alt={`Banner ${banner.id}`}  className="w-full object-cover"/>
      ))}  </div>
  </>;
};

export default Banner;
