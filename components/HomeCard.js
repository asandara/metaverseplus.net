import Link from "next/link";
const HomeCard = ({ props }) => {
  return (
    <div className="">
      <div className="grid text-white">
        <img src={props.image} className="mb-3 w-full rounded-none" />
        <h2 className="text-lg font-bold mb-1">{props.title}</h2>
        <p className="mb-4">{props.desc}</p>
      </div>

      <Link href={props.link}>
        <div
          className="border-1 border-white py-1.5 w-44 text-sm rounded-sm cursor-pointer button  button01  text-white "
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
        >
          <center>
            <h6 className="font-bold">Read more</h6>
          </center>
        </div>
      </Link>
    </div>
  );
};

export default HomeCard;
