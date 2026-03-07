import { AlertCircle, Camera, X } from "lucide-react";
import Image from "next/image";
import FieldLabel from "./FieldLabel";

// ══════════════════════════════════════════════
export default function PhotoBox({
  photoPreview,
  photoRef,
  removePhoto,
  handlePhotoChange,
  error,
}) {
  return (
    <div className="flex flex-col items-center">
      <FieldLabel label="Student Photo" required />

      <div className="relative">
        <div
          onClick={() => photoRef.current?.click()}
          className={`w-28 h-32 rounded-lg overflow-hidden cursor-pointer transition
            ${
              photoPreview
                ? "border-2 border-[#3F72AF] shadow-md  "
                : "border-2 border-dashed border-gray-300 bg-gray-50 hover:border-[#3F72AF]  flex flex-col items-center justify-center"
            }`}
        >
          {photoPreview ? (
            <Image
              src={photoPreview}
              alt="Student preview"
              fill
              className="object-cover object-top"
            />
          ) : (
            <>
              <Camera
                size={24}
                className="text-gray-400 mb-1.5"
                strokeWidth={1.5}
              />
              <span className="text-[10px] text-gray-400 text-center leading-tight px-2">
                Upload 300×300
                <br />
                (JPG/PNG)
              </span>
            </>
          )}
        </div>
        {photoPreview && (
          <button
            type="button"
            onClick={removePhoto}
            className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 hover:border-red-400 transition z-10"
          >
            <X size={12} className="text-gray-500 hover:text-red-500" />
          </button>
        )}
      </div>
      <input
        ref={photoRef}
        type="file"
        accept="image/jpeg,image/png"
        className="hidden"
        onChange={handlePhotoChange}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}
