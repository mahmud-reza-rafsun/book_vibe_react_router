import BannerImg from "../../../assets/books.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[500px] px-24 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={BannerImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn btn-secondary">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
