function Availability() {
  return (
    <div className="p-8">
      <h1 className="text-5xl capitalize text-center mb-12">Availability</h1>
      <div className="flex flex-column ">
        <div className="w-1/3 md:h-48 ">
          <a
            className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
            href="#"
            title="Link"
            style={{
              backgroundImage:
                'url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image)',
            }}
          />
        </div>

        <div className="w-2/3 pl-4">
          <div className="px-8 bg-white rounded-lg">
            <a
              className="text-2xl text-gray-700 font-bold hover:text-gray-600"
              href="#"
            >
              The Snug
            </a>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto
              eos enim reprehenderit nisi, accusamus delectus nihil quis facere
              in modi ratione libero!
            </p>

            <div className="flex justify-between items-baseline mt-4">
              <p className="mr-8 text-gray-600">
                Rates per night from:{' '}
                <span className="font-semibold text-xl text-black">£250</span>
              </p>
              <button className="bg-blue-500 text-white p-2 rounded text-xl font-bold">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Availability;
