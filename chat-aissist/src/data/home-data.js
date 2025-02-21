import { BsFileEarmarkTextFill } from "react-icons/bs";
import { IoIosChatboxes } from "react-icons/io";
import { FaRegImages } from "react-icons/fa6";
import { LuImageUp } from "react-icons/lu";

export const options = [
  { label: "Upload Image", icon: <LuImageUp className="text-green-700" /> },
  { label: "Let's Chat", icon: <IoIosChatboxes className="text-blue-700" /> },
  {
    label: "Generate Image",
    icon: <FaRegImages className="text-purple-700" />,
  },
  {
    label: "Summarize Text",
    icon: <BsFileEarmarkTextFill className="text-orange-600" />,
  },
];
