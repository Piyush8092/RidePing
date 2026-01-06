"use client";

import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import userProfile from "@/components/assets/userProfile.png";

const UserCard = ({ name, rating, review }) => {
  return (
   <div className="max-w-90 bg-white rounded-3xl shadow-md p-5 text-center shrink-0 border-t-8 border-black">
  {/* Profile Image */}
  <div className="w-16 h-16 mx-auto rounded-full overflow-hidden bg-gray-200">
    <Image src={userProfile} alt={name} width={64} height={64} className="object-cover" />
  </div>

  {/* Name */}
  <h3 className="mt-3 font-semibold text-gray-900 text-lg">{name}</h3>

  {/* Rating */}
  <div className="mt-2 flex items-center justify-center gap-1">
    {[...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-black" : "text-gray-300"}`}
      />
    ))}
    <span className="ml-1 text-sm text-black">{rating} / 5</span>
  </div>

  {/* Review */}
  <p className="mt-3 text-sm text-black leading-relaxed">{review}</p>
</div>

  );
};

export default UserCard;
