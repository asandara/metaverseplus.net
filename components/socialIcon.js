import Link from "next/link";

function SocialIcon() {
  return (
    <div className="flex  space-x-5 justify-start md:justify-center mt-5">
      <Link href="https://twitter.com/Metaverseplus_" target="_blank" className="cursor-pointer">
        <div
          width="38"
          height="39"
          viewBox="0 0 38 39"
          className="w-9 h-9 bg-white rounded-full flex justify-center items-center cursor-pointer"
        >
      
        <h1 className="text-black text-lg font-bold ">X</h1>  
   
        </div>
      </Link>


      <Link href="https://t.me/+9710501925188" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="39"
          viewBox="0 0 38 39"
          className="cursor-pointer w-9 h-9"
        >
          <g id="Group_31" data-name="Group 31" transform="translate(-0.385)">
            <ellipse
              id="Ellipse_15"
              data-name="Ellipse 15"
              cx="19"
              cy="19.5"
              rx="19"
              ry="19.5"
              transform="translate(0.385)"
              fill="#fff"
            />
            <g
              id="Group_22"
              data-name="Group 22"
              transform="translate(10.292 11.798)"
            >
              <g id="Group_21" data-name="Group 21" transform="translate(0 0)">
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M1710.527,764.154l1.932,5.348s.241.5.5.5,4.106-4,4.106-4l4.279-8.264-10.749,5.038Z"
                  transform="translate(-1706.235 -755.882)"
                  fill="#222"
                />
                <path
                  id="Path_9"
                  data-name="Path 9"
                  d="M1719.958,790.02l-.371,3.942s-.155,1.208,1.052,0,2.364-2.139,2.364-2.139Z"
                  transform="translate(-1713.105 -780.376)"
                  fill="#474747"
                />
                <g id="Group_20" data-name="Group 20">
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M1697.067,758.516l-3.975-1.3s-.475-.193-.322-.63c.031-.09.095-.167.285-.3.881-.614,16.3-6.156,16.3-6.156a1.316,1.316,0,0,1,.692-.049.374.374,0,0,1,.256.279,1.284,1.284,0,0,1,.035.351c0,.1-.014.2-.023.345-.094,1.515-2.9,12.825-2.9,12.825s-.168.662-.771.684a1.1,1.1,0,0,1-.8-.31c-1.182-1.017-5.269-3.763-6.172-4.367a.171.171,0,0,1-.074-.121c-.013-.064.056-.143.056-.143s7.116-6.325,7.305-6.989c.014-.051-.041-.077-.115-.055-.473.174-8.665,5.347-9.569,5.918A.436.436,0,0,1,1697.067,758.516Z"
                    transform="translate(-1692.74 -750.053)"
                    fill="#0c1219"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </Link>

      <Link
        href="https://wa.link/hi4nkj"
        target="_blank"
      >
        <img
          src="./whatapp.svg"
          width="36"
          height="37"
          alt="whatsapp"
          className="cursor-pointer"
        />
      </Link>


    </div>
  );
}

export default SocialIcon;
