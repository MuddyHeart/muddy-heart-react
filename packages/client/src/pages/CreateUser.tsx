import { useState } from "react";
import { useNavigate } from "react-router-dom";
import createButton from "../public/button/create_button.png";

export default function CreateUser() {
  const navigate = useNavigate();
  const [accept, setAccept] = useState(false);
  const [name, setName] = useState("");

  const onAccept = () => {
    navigate("/home");
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-opacity-60 bg-black px-36">
      <div className="w-[700px] h-[270px] bg-black bg-opacity-40 border border-orange-500 border-opacity-20 rounded-md">
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-center bit-font">
            <div className="text-white text-2xl">Welcome to Muddy Heart</div>
            <div className="text-orange-500 text-sm">
              What&apos;s your name?
            </div>
          </div>
          <input
            type="text"
            className="rounded-md w-96 h-10 text-center bit-font outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className={`${accept ? "" : "hover:scale-110 duration-200"}`}
              onClick={onAccept}
              disabled={accept}
            >
              <img
                src={createButton}
                className={`animate-none ${accept ? "opacity-50" : "hover:animate-pulse"
                  } `}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
