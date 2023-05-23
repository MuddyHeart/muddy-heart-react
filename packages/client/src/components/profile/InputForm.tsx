const InputForm = () => {
  return (
    <>
      <div className="flex justify-center">
        <button
          className={`${accept ? "" : "hover:scale-110 duration-200"}`}
          onClick={onAccept}
          disabled={accept}
        >
          <img
            src={createButton}
            className={`-mt-8 animate-none ${
              accept ? "opacity-50" : "hover:animate-pulse"
            } `}
          />
        </button>
      </div>
    </>
  );
};
