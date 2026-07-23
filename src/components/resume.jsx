export default function Resume({ general }) {
  return (
    <div className="flex-1 flex min-h-screen">
      <div className="flex-1 flex flex-col items-center mt-24 bg-gray/10 min-h-full">
        <img
          src={general.photo}
          alt="profile picture"
          className="w-64 h-64 rounded-full object-cover"
        />
      </div>
      <div className="flex-2 bg-[#172131] min-h-full"></div>
    </div>
  );
}
