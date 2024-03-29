function Pricing() {
  return (
    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
      <div className="shadow p-5 rounded-lg border-t-4 border-b3yellow bg-white">
        <p className="uppercase text-sm font-medium text-gray-500">Starter</p>
        <p className="mt-4 text-3xl text-gray-700 font-medium">Free</p>
        <p className="mt-4 font-medium text-gray-700">Up to 5 listing monthly</p>
        <div className="mt-8">
          <ul className="grid grid-cols-1 gap-4">
            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-b3yellow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z" />
              </svg>
              20 days only
            </li>
            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
              </svg>
              Weekly email newsletter
            </li>
            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
              </svg>
              Quota renewed monthly
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <button className="bg-gray-400 hover:bg-gray-500 px-3 py-2 rounded-lg w-full text-white">
            Create Free Listing
          </button>
        </div>
      </div>

      {/* Second Pricing Block */}

      <div className="shadow p-5 rounded-lg border-t-4 border-b3yellow bg-white">
        <p className="uppercase text-sm font-medium text-gray-500">Mensual</p>
        <p className="mt-4 text-3xl text-gray-700 font-medium">$32.000 <span className="text-base font-normal">/listing</span></p>
        <p className="mt-4 font-medium text-gray-700">2 clases a la semana </p>
        <div className="mt-8">
          <ul className="grid grid-cols-1 gap-4">
            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              ></svg>
              30 days only
            </li>
            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              ></svg>
              Twice weekly email newsletter
            </li>
            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              ></svg>
              Social feed share (3 platforms)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

