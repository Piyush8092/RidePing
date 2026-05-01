import Image from "next/image";
import { Star } from "lucide-react";
import userProfile from "@/components/assets/userProfile.png";

const UserCard = ({ name, rating, review }) => {
  return (
    <div className="border-border-secondary max-w-90 shrink-0 rounded-3xl border-t-8 bg-white p-5 text-center shadow-md">
      {/* Profile Image */}
      <div className="mx-auto h-16 w-16 overflow-hidden rounded-full bg-gray-200">
        <Image src={userProfile} alt={name} width={64} height={64} className="object-cover" />
      </div>

      {/* Name */}
      <h3 className="mt-3 text-lg font-semibold text-gray-900">{name}</h3>

      {/* Rating */}
      <div className="mt-2 flex items-center justify-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-black" : "text-gray-300"}`} />
        ))}
        <span className="ml-1 text-sm text-black">{rating} / 5</span>
      </div>

      {/* Review */}
      <p className="mt-3 text-sm leading-relaxed text-black">{review}</p>
    </div>
  );
};

export default UserCard;
