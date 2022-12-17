import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="mx-auto flex max-w-[900px] items-center pt-[145px] pb-[130px]">
      <img
        src="https://www.thegioididong.com/html/TGDD/destop/images/404.png"
        alt="background-png"
        className="max-w-[481px]"
      />
      <div>
        <h1 className="max-w-[460px] pt-12 pb-8 text-center text-4xl font-medium">
          Sorry, we couldn't find the page you're looking for!
        </h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <p>Go home TripGuide</p>
          <Link to="/">
            <div className="relative cursor-pointer rounded-full bg-gray-200 py-2 px-14">
              <img alt="logo" src="logo.png" className="h-7 w-7" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
