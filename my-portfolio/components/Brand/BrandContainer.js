import Link from "next/link";
import DwaveAnimation from "./DwaveAnimation";
const BrandContainer = () => {
  return (
    <div>
      <Link href="/mybrand">
        <a>
          <DwaveAnimation />
        </a>
      </Link>
    </div>
  );
};

export default BrandContainer;
