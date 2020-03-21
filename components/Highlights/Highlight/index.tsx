import Link from 'next/link';

function Highlight() {
  return (
    <Link href="/region/devon">
      <div className="lg:w-1/3 md:mx-4 cursor-pointer">
        <img
          className=" w-full object-cover object-center rounded-lg"
          src="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80"
          alt=""
        />
        <div className="pt-4 pb-0 h-auto md:h-40 lg:h-40">
          <div className="font-semibold mb-2 text-lg md:text-base lg:text-lg ">
            Woman standing under blue sky
          </div>
          <div className="text-sm leading-relaxed block md:text-xs lg:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem
            blanditiis unde asperiores? debitis!
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Highlight;
