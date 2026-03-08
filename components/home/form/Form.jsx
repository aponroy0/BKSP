"use client";

import { getAdmissionHeading } from "@/utils/addmission";
import { ArrowRight, FileText, Upload, User, Users } from "lucide-react";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FieldError from "./FieldError";
import FieldLabel from "./FieldLabel";
import PhotoBox from "./PhotoBox";
import SectionHeader from "./SectionHeader";

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
  const [photoErr, setPhotoErr] = useState("");
  const photoRef = useRef(null);
  const birthCertRef = useRef(null);
  const tcRef = useRef(null);
  const t = useTranslations("applyForm");

  const pathName = usePathname();
  const locale = pathName.split("/")[1] || "en";
  const academicYear = getAdmissionHeading(locale);

  const onSubmit = async (data) => {
    if (!photoRef.current.files[0]) {
      setPhotoErr(t("photoRequired"));
      return;
    } else {
      setPhotoErr("");
    }

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
        throw new Error(error.message || t("submitFailed"));
      }

      alert(t("submitSuccess"));
      reset();
      setPhotoPreview(null);
      setBirthCertName("");
      setTcName("");
      photoRef.current.value = "";
      birthCertRef.current.value = "";
      tcRef.current.value = "";
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhotoPreview(URL.createObjectURL(file));
    setPhotoErr("");
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
          {t("title")}
        </span>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#112D4E] mb-3">
          {t("subtitle")} {academicYear}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">{t("description")}</p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 pb-16">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col gap-5 mb-5">
            {/* Student Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <SectionHeader icon={User} title="studentInfo" />

              <div className="p-4 sm:p-8">
                {/* Mobile: photo centred on top */}
                <div className="flex justify-center mb-5 sm:hidden">
                  <PhotoBox
                    photoPreview={photoPreview}
                    photoRef={photoRef}
                    removePhoto={removePhoto}
                    handlePhotoChange={handlePhotoChange}
                    error={photoErr}
                  />
                </div>

                {/* Desktop: two-column wrapper */}
                <div className="flex gap-6 items-start">
                  {/* LEFT — all fields */}
                  <div className="flex-1 space-y-5">
                    {/* Full Name */}
                    <div>
                      <FieldLabel label="fullName" required />
                      <input
                        type="text"
                        placeholder={t("fullNamePlaceholder")}
                        className={inputBase}
                        {...register("fullName", {
                          required: t("fullNameRequired"),
                          minLength: {
                            value: 3,
                            message: t("fullNameMin"),
                          },
                        })}
                      />
                      <FieldError message={errors.fullName?.message} />
                    </div>

                    {/* Gender + DOB */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <FieldLabel label="gender" required />
                        <select
                          className={inputBase}
                          {...register("gender", {
                            required: t("genderRequired"),
                          })}
                        >
                          <option value="">{t("selectGender")}</option>
                          <option value="male">{t("male")}</option>
                          <option value="female">{t("female")}</option>
                          <option value="other">{t("other")}</option>
                        </select>
                        <FieldError message={errors.gender?.message} />
                      </div>
                      <div>
                        <FieldLabel label="dob" required />
                        <input
                          type="date"
                          className={inputBase}
                          {...register("dob", {
                            required: t("dobRequired"),
                          })}
                        />
                        <FieldError message={errors.dob?.message} />
                      </div>
                    </div>

                    {/* Applied Class + Academic Year */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <FieldLabel label="appliedClass" required />
                        <select
                          className={inputBase}
                          {...register("appliedClass", {
                            required: t("classRequired"),
                          })}
                        >
                          <option value="">{t("selectClass")}</option>
                          <option value="Class Six">{t("classSix")}</option>
                          <option value="Class Seven">{t("classSeven")}</option>
                          <option value="Class Eight">{t("classEight")}</option>
                          <option value="Class Nine">{t("classNine")}</option>
                          <option value="Class Ten">{t("classTen")}</option>
                        </select>
                        <FieldError message={errors.appliedClass?.message} />
                      </div>
                      <div>
                        <FieldLabel label="academicYear" required />
                        <input
                          type="text"
                          placeholder={t("academicYearPlaceholder")}
                          className={`${inputBase} bg-gray-50 text-gray-500`}
                          {...register("academicYear")}
                        />
                      </div>
                    </div>

                    {/* Religion + Blood Group */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <FieldLabel label="religion" />
                        <input
                          type="text"
                          placeholder={t("religionPlaceholder")}
                          className={inputBase}
                          {...register("religion")}
                        />
                      </div>
                      <div>
                        <FieldLabel label="bloodGroup" />
                        <select
                          className={inputBase}
                          {...register("bloodGroup")}
                        >
                          <option value="">{t("selectBloodGroup")}</option>
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
                      <FieldLabel label="permanentAddress" required />
                      <textarea
                        rows={3}
                        placeholder={t("addressPlaceholder")}
                        className={`${inputBase} resize-none`}
                        {...register("address", {
                          required: t("addressRequired"),
                        })}
                      />
                      <FieldError message={errors.address?.message} />
                    </div>

                    {/* Emergency Contact + Birth Certificate */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <FieldLabel label="emergencyContact" required />
                        <div className="flex">
                          <input
                            type="text"
                            placeholder="1XXX-XXXXXX"
                            className={inputBase}
                            {...register("emergencyContact", {
                              required: t("contactRequired"),
                              pattern: {
                                value: /^[0-9\-]+$/,
                                message: t("numbersOnly"),
                              },
                            })}
                          />
                        </div>
                        <FieldError
                          message={errors.emergencyContact?.message}
                        />
                      </div>
                      <div>
                        <FieldLabel label="birthCertificate" required />
                        <div
                          onClick={() => birthCertRef.current?.click()}
                          className="flex items-center gap-2 border border-dashed border-gray-300 rounded-lg px-3.5 py-2.5 cursor-pointer hover:border-[#3F72AF] transition bg-gray-50 min-h-[42px]"
                        >
                          <Upload
                            size={16}
                            className="text-gray-400 shrink-0"
                          />
                          <span className="text-sm text-gray-400 truncate">
                            {birthCertName || t("clickToUpload")}
                          </span>
                        </div>
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg"
                          className="hidden"
                          {...register("birthCert", {
                            required: t("birthCertRequired"),
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

                    {/* Academic History */}
                    <div>
                      <p className="text-xs font-bold text-[#3F72AF] uppercase tracking-widest mb-3">
                        {t("academicHistory")}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <FieldLabel label="previousSchool" />
                          <input
                            type="text"
                            placeholder={t("previousSchoolPlaceholder")}
                            className={inputBase}
                            {...register("prevSchool")}
                          />
                        </div>
                        <div>
                          <FieldLabel label="transferCertificate" />
                          <div
                            onClick={() => tcRef.current?.click()}
                            className="flex items-center gap-2 border border-dashed border-gray-300 rounded-lg px-3.5 py-2.5 cursor-pointer hover:border-[#3F72AF] transition bg-gray-50 min-h-[42px]"
                          >
                            <FileText
                              size={16}
                              className="text-gray-400 shrink-0"
                            />
                            <span className="text-sm text-gray-400 truncate">
                              {tcName || t("tcCopy")}
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

                  {/* RIGHT — photo box, desktop only */}
                  <div className="hidden sm:flex flex-col items-center shrink-0">
                    <PhotoBox
                      photoPreview={photoPreview}
                      photoRef={photoRef}
                      removePhoto={removePhoto}
                      handlePhotoChange={handlePhotoChange}
                      error={photoErr}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Guardian Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-2.5 px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100">
                <Users
                  size={18}
                  className="text-[#112D4E] shrink-0"
                  strokeWidth={1.75}
                />
                <span className="font-semibold text-base text-[#112D4E]">
                  {t("guardianDetails")}
                </span>
              </div>

              <div className="p-4 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FieldLabel label="fatherName" required />
                    <input
                      type="text"
                      placeholder={t("fatherNamePlaceholder")}
                      className={inputBase}
                      {...register("fatherName", {
                        required: t("fatherNameRequired"),
                      })}
                    />
                    <FieldError message={errors.fatherName?.message} />
                  </div>
                  <div>
                    <FieldLabel label="motherName" required />
                    <input
                      type="text"
                      placeholder={t("motherNamePlaceholder")}
                      className={inputBase}
                      {...register("motherName", {
                        required: t("motherNameRequired"),
                      })}
                    />
                    <FieldError message={errors.motherName?.message} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FieldLabel label="primaryContact" required />
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="1XXX-XXXXXX"
                        className={`${inputBase} rounded`}
                        {...register("guardianMobile", {
                          required: t("mobileRequired"),
                          pattern: {
                            value: /^[0-9\-]+$/,
                            message: t("numbersOnly"),
                          },
                        })}
                      />
                    </div>
                    <FieldError message={errors.guardianMobile?.message} />
                  </div>
                </div>

                <FieldError message={errors.declaration?.message} />
              </div>
            </div>
          </div>

          {/* Form Footer */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 sm:py-5 gap-4">
              <p className="text-sm text-gray-400 text-center sm:text-left">
                {t("helpText")}
                <span className="text-gray-500 font-semibold">
                  {t("helpPhone")}
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
                  {t("cancel")}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-2.5 bg-[#3F72AF] hover:bg-[#2d5a8e] text-white rounded-lg font-bold text-sm transition shadow-md flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? t("submitting") : t("submit")}
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
