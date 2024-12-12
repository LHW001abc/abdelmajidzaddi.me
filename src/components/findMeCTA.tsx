import Link from "next/link";
import {socials} from "@/config/app";

const FindMeCTA = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          Find me on
        </h2>
        <div className="flex justify-center space-x-4">
          <Link href={socials.github} target={"_blank"} title={"GitHub"}>
            <img src={"/logo/github.gif"} alt={"GitHub"} width={"32px"} height={"32px"}/>
          </Link>
          <Link href={socials.linkedin} target={"_blank"} title={"LinkedIN"}>
            <img src={"/logo/linkedin.gif"} alt={"LinkedIn"} width={"32px"} height={"32px"}/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FindMeCTA;