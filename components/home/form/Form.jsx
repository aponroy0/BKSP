"use client";

import { getAcademicYear, getAdmissionHeading } from "@/utils/addmission";
import {
  ArrowRight,
  Camera,
  FileText,
  Upload,
  User,
  Users,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FieldError from "./FieldError";
import FieldLabel from "./FieldLabel";
import SectionHeader from "./SectionHeader";

const ACADEMIC_YEAR = getAcademicYear();
const ADMISSION_HEADING = getAdmissionHeading();
const inputBase =
  "w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] transition";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [photoPreview, setPhotoPreview] = useState(null);
  const [birthCertName, setBirthCertName] = useState("");
  const [tcName, setTcName] = useState("");
  const photoRef = useRef(null);
  const birthCertRef = useRef(null);
  const tcRef = useRef(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key !== "photo" && key !== "birthCert" && key !== "transferCert") {
          formData.append(key, data[key] || "");
        }
      });
      if (photoRef.current?.files[0])
        formData.append("photo", photoRef.current.files[0]);
      if (birthCertRef.current?.files[0])
        formData.append("birthCert", birthCertRef.current.files[0]);
      if (tcRef.current?.files[0])
        formData.append("transferCert", tcRef.current.files[0]);

      const response = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit application");
      }

      alert("Application submitted successfully!");
      reset();
      setPhotoPreview(null);
      setBirthCertName("");
      setTcName("");
      photoRef.current.value = "";
      birthCertRef.current.value = "";
      tcRef.current.value = "";
    } catch (error) {
      console.error("Submission error:", error);
      alert(`Error: ${error.message}`);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhotoPreview(URL.createObjectURL(file));
  };

  const removePhoto = (e) => {
    e.stopPropagation();
    setPhotoPreview(null);
    if (photoRef.current) photoRef.current.value = "";
  };

  return (
    <main className="bg-[#F9F7F7] min-h-screen">
      {/* Page heading */}
      <div className="text-center py-8 sm:py-12 px-4">
        <span className="text-[#3F72AF] font-bold text-xs uppercase tracking-widest mb-2 block">
          Application Form
        </span>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#112D4E] mb-3">
          {ADMISSION_HEADING}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Please fill out the form below carefully to apply for admission.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 pb-16">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col gap-5 mb-5">
            {/* ══════════════════════════════════════
                Card 1 — Student Information
            ══════════════════════════════════════ */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <SectionHeader icon={User} title="Student Information" />

              <div className="p-4 sm:p-8">
                {/* Mobile: photo centred on top */}
                <div className="flex justify-center mb-5 sm:hidden">
                  <PhotoBox
                    photoPreview={photoPreview}
                    photoRef={photoRef}
                    removePhoto={removePhoto}
                    handlePhotoChange={handlePhotoChange}
                  />
                </div>

                {/* Desktop: two-column wrapper */}
                <div className="flex gap-6 items-start">
                  {/* LEFT — all fields */}
                  <div className="flex-1 space-y-5">
                    {/* Full Name */}
                    <div>
                      <FieldLabel label="Full Name of Student" required />
                      <input
                        type="text"
                        placeholder="Enter student's full name"
                        className={inputBase}
                        {...register("fullName", {
                          required: "Full name is required",
                          minLength: {
                            value: 3,
                            message: "At least 3 characters",
                          },
                        })}
                      />
                      <FieldError message={errors.fullName?.message} />
                    </div>

                    {/* Gender + DOB */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <FieldLabel label="Gender" required />
                        <select
                          className={inputBase}
                          {...register("gender", {
                            required: "Please select gender",
                          })}
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        <FieldError message={errors.gender?.message} />
                      </div>
                      <div>
                        <FieldLabel label="Date of Birth" required />
                        <input
                          type="date"
                          className={inputBase}
                          {...register("dob", {
                            required: "Date of birth is required",
                          })}
                        />
                        <FieldError message={errors.dob?.message} />
                      </div>
                    </div>

                    {/* Applied Class + Academic Year */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <FieldLabel label="Applied Class" required />
                        <select
                          className={inputBase}
                          {...register("appliedClass", {
                            required: "Please select a class",
                          })}
                        >
                          <option value="">Select Class</option>
                          {[
                            "Class Six",
                            "Class Seven",
                            "Class Eight",
                            "Class Nine",
                            "Class Ten",
                          ].map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        <FieldError message={errors.appliedClass?.message} />
                      </div>
                      <div>
                        <FieldLabel label="Academic Year" required />
                        <input
                          type="text"
                          readOnly
                          value={ACADEMIC_YEAR}
                          className={`${inputBase} bg-gray-50 cursor-not-allowed text-gray-500`}
                          {...register("academicYear")}
                        />
                      </div>
                    </div>

                    {/* Religion + Blood Group */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <FieldLabel label="Religion" />
                        <input
                          type="text"
                          placeholder="e.g. Islam"
                          className={inputBase}
                          {...register("religion")}
                        />
                      </div>
                      <div>
                        <FieldLabel label="Blood Group" />
                        <select
                          className={inputBase}
                          {...register("bloodGroup")}
                        >
                          <option value="">Select Group</option>
                          {[
                            "A+",
                            "A−",
                            "B+",
                            "B−",
                            "AB+",
                            "AB−",
                            "O+",
                            "O−",
                          ].map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Permanent Address */}
                    <div>
                      <FieldLabel label="Permanent Address" required />
                      <textarea
                        rows={3}
                        placeholder="Enter full residential address"
                        className={`${inputBase} resize-none`}
                        {...register("address", {
                          required: "Address is required",
                        })}
                      />
                      <FieldError message={errors.address?.message} />
                    </div>

                    {/* Emergency Contact + Birth Certificate */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <FieldLabel label="Emergency Contact No" required />
                        <div className="flex">
                          <span className="inline-flex items-center px-3 border border-r-0 border-gray-200 bg-gray-50 rounded-l-lg text-sm text-gray-600 font-medium shrink-0">
                            +880
                          </span>
                          <input
                            type="tel"
                            placeholder="1XXX-XXXXXX"
                            className={`${inputBase} rounded-l-none`}
                            {...register("emergencyContact", {
                              required: "Contact number is required",
                              pattern: {
                                value: /^[0-9\-]+$/,
                                message: "Numbers only",
                              },
                            })}
                          />
                        </div>
                        <FieldError
                          message={errors.emergencyContact?.message}
                        />
                      </div>
                      <div>
                        <FieldLabel
                          label="Birth Certificate (PDF/JPG)"
                          required
                        />
                        <div
                          onClick={() => birthCertRef.current?.click()}
                          className="flex items-center gap-2 border border-dashed border-gray-300 rounded-lg px-3.5 py-2.5 cursor-pointer hover:border-[#3F72AF] transition bg-gray-50 min-h-[42px]"
                        >
                          <Upload
                            size={16}
                            className="text-gray-400 shrink-0"
                          />
                          <span className="text-sm text-gray-400 truncate">
                            {birthCertName || "Click to upload"}
                          </span>
                        </div>
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg"
                          className="hidden"
                          {...register("birthCert", {
                            required: "Birth certificate is required",
                          })}
                          ref={(e) => {
                            register("birthCert").ref(e);
                            birthCertRef.current = e;
                          }}
                          onChange={(e) =>
                            setBirthCertName(e.target.files[0]?.name || "")
                          }
                        />
                        <FieldError message={errors.birthCert?.message} />
                      </div>
                    </div>

                    {/* Academic History (Optional) */}
                    <div>
                      <p className="text-xs font-bold text-[#3F72AF] uppercase tracking-widest mb-3">
                        Academic History (Optional)
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <FieldLabel label="Previous School Name" />
                          <input
                            type="text"
                            placeholder="Enter name of previous school"
                            className={inputBase}
                            {...register("prevSchool")}
                          />
                        </div>
                        <div>
                          <FieldLabel label="Transfer Certificate" />
                          <div
                            onClick={() => tcRef.current?.click()}
                            className="flex items-center gap-2 border border-dashed border-gray-300 rounded-lg px-3.5 py-2.5 cursor-pointer hover:border-[#3F72AF] transition bg-gray-50 min-h-[42px]"
                          >
                            <FileText
                              size={16}
                              className="text-gray-400 shrink-0"
                            />
                            <span className="text-sm text-gray-400 truncate">
                              {tcName || "TC Copy (Optional)"}
                            </span>
                          </div>
                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg"
                            className="hidden"
                            {...register("transferCert")}
                            ref={(e) => {
                              register("transferCert").ref(e);
                              tcRef.current = e;
                            }}
                            onChange={(e) =>
                              setTcName(e.target.files[0]?.name || "")
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END LEFT col */}

                  {/* RIGHT — photo box, desktop only */}
                  <div className="hidden sm:flex flex-col items-center shrink-0">
                    <PhotoBox
                      photoPreview={photoPreview}
                      photoRef={photoRef}
                      removePhoto={removePhoto}
                      handlePhotoChange={handlePhotoChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════
                Card 2 — Guardian Details
            ══════════════════════════════════════ */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-2.5 px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100">
                <Users
                  size={18}
                  className="text-[#112D4E] shrink-0"
                  strokeWidth={1.75}
                />
                <span className="font-semibold text-base text-[#112D4E]">
                  Guardian Details
                </span>
              </div>

              <div className="p-4 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FieldLabel label="Father's Full Name" required />
                    <input
                      type="text"
                      placeholder="Enter father's name"
                      className={inputBase}
                      {...register("fatherName", {
                        required: "Father's name is required",
                      })}
                    />
                    <FieldError message={errors.fatherName?.message} />
                  </div>
                  <div>
                    <FieldLabel label="Mother's Full Name" required />
                    <input
                      type="text"
                      placeholder="Enter mother's name"
                      className={inputBase}
                      {...register("motherName", {
                        required: "Mother's name is required",
                      })}
                    />
                    <FieldError message={errors.motherName?.message} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FieldLabel label="Primary Contact Mobile" required />
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 border-gray-200 bg-gray-50 rounded-l-lg text-sm text-gray-600 font-medium shrink-0">
                        +880
                      </span>
                      <input
                        type="tel"
                        placeholder="1XXX-XXXXXX"
                        className={`${inputBase} rounded-l-none`}
                        {...register("guardianMobile", {
                          required: "Mobile number is required",
                          pattern: {
                            value: /^[0-9\-]+$/,
                            message: "Numbers only",
                          },
                        })}
                      />
                    </div>
                    <FieldError message={errors.guardianMobile?.message} />
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="declaration"
                    className="mt-0.5 w-4 h-4 accent-[#3F72AF] cursor-pointer shrink-0"
                    {...register("declaration", {
                      required: "You must accept the declaration",
                    })}
                  />
                  <label
                    htmlFor="declaration"
                    className="text-sm text-gray-500 cursor-pointer leading-relaxed"
                  >
                    I hereby declare that all information provided above is true
                    and accurate to the best of my knowledge.
                  </label>
                </div>
                <FieldError message={errors.declaration?.message} />
              </div>
            </div>
          </div>
          {/* END cards */}

          {/* ══════════════════════════════════════
              Form Footer
          ══════════════════════════════════════ */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 sm:py-5 gap-4">
              <p className="text-sm text-gray-400 text-center sm:text-left">
                Need help? Contact Admissions at{" "}
                <span className="text-[#112D4E] font-medium whitespace-nowrap">
                  +880 1712–345678
                </span>
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    reset();
                    setPhotoPreview(null);
                    setBirthCertName("");
                    setTcName("");
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 border border-gray-300 text-gray-600 rounded-lg font-medium text-sm hover:bg-gray-50 transition text-center"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-2.5 bg-[#3F72AF] hover:bg-[#2d5a8e] text-white rounded-lg font-bold text-sm transition shadow-md flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting…" : "Submit Application"}
                  {!isSubmitting && <ArrowRight size={15} strokeWidth={2.5} />}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

// ══════════════════════════════════════════════
// Reusable Photo Box component
// ══════════════════════════════════════════════
function PhotoBox({ photoPreview, photoRef, removePhoto, handlePhotoChange }) {
  return (
    <div className="flex flex-col items-center">
      <FieldLabel label="Student Photo" />
      <div className="relative">
        <div
          onClick={() => photoRef.current?.click()}
          className={`w-28 h-32 rounded-lg overflow-hidden cursor-pointer transition
            ${
              photoPreview
                ? "border-2 border-[#3F72AF] shadow-md"
                : "border-2 border-dashed border-gray-300 bg-gray-50 hover:border-[#3F72AF] flex flex-col items-center justify-center"
            }`}
        >
          {photoPreview ? (
            <img
              src={photoPreview}
              alt="Student preview"
              className="w-full h-full object-cover object-top"
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
    </div>
  );
}
