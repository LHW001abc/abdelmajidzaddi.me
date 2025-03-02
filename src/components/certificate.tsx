import { CertificateProps } from "@/lib/types";
import Image from "next/image";

const Certificate = ({ data: certificate }: { data: CertificateProps }) => {
  // Default image path or add null check
  const imageSrc = certificate.image || "/placeholder-certificate.png";
  
  return (
    <div className="relative flex items-end overflow-hidden bg-cover rounded-lg h-64">
      <Image 
        src={imageSrc}
        alt={certificate.title}
        fill
        className="object-cover z-0"
        priority
      />
      <div className="relative w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 z-10">
        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
          {certificate.title}
        </h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-md tracking-wider text-blue-500 uppercase dark:text-blue-300">{certificate.issuedBy}</p>
          <p className="text-sm tracking-wider text-blue-500 uppercase dark:text-blue-300">{certificate.issuedAt}</p>
        </div>
      </div>
    </div>
  );
}

export default Certificate;