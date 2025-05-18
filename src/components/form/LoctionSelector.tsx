const LocationSelector = () => {
  return (
    <>
      <div className="relative flex-1">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/53f356018a53393c362ad91b7ed377404b68993b"
          alt="Map"
          className="rounded-lg size-full object-cover"
        />
        <div className="flex absolute inset-x-0 bottom-0 items-center p-1.5 rounded-br-lg rounded-bl-lg bg-black bg-opacity-50">
          <i className="ti ti-map-pin mr-1.5 text-white" aria-hidden="true" />
          <span className="text-xs text-white">WESTMINISTER</span>
        </div>
      </div>

      <div className="flex-1">
        <label htmlFor="location" className="mb-1.5 text-xs text-neutral-400">
          Location
        </label>
        <input
          id="location"
          type="text"
          placeholder="Enter location"
          className="px-4 py-2 w-full text-white border-2 border-rose-500 border-solid rounded-[74px] bg-transparent focus:outline-none"
        />
        <p className="mt-2.5 text-xs text-stone-300">
          The places you could go...
        </p>
        <div className="flex gap-2.5 mt-2.5">
          <button className="px-2.5 py-1.5 text-xs rounded-md bg-white bg-opacity-10 text-zinc-400">
            Palace
          </button>
          <button className="px-2.5 py-1.5 text-xs rounded-md bg-white bg-opacity-10 text-zinc-400">
            Temple
          </button>
          <button className="px-2.5 py-1.5 text-xs rounded-md bg-white bg-opacity-10 text-zinc-400">
            Options
          </button>
        </div>
      </div>
    </>
  );
};

export default LocationSelector;
