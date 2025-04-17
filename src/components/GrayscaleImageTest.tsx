'use client';

export default function GrayscaleImageTest() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="rounded-lg overflow-hidden border border-gray-600">
        <img
          src="https://picsum.photos/id/1015/300/160"
          alt="Test grayscale"
          className="w-[300px] h-[160px] object-cover filter grayscale hover:grayscale-0 transition duration-700 ease-in-out"
        />
      </div>
    </div>
  );
}
