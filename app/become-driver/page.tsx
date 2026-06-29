"use client";

import { useState } from "react";
import { createDriverApplicationMessage } from "@/lib/whatsappHelper";

export default function BecomeDriverPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    city: "",
    address: "",
    experience: "",
    license: "",
    vehicleType: "Sedan (Dzire/Etios)",
    ownVehicle: "Yes",
    education: "",
    languages: "",
    area: "",
    notes: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = "Valid 10-digit Indian phone number required";
    if (!/^[6-9]\d{9}$/.test(formData.whatsapp)) newErrors.whatsapp = "Valid 10-digit Indian phone number required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.experience || Number(formData.experience) < 1) newErrors.experience = "Minimum 1 year experience required";
    
    // License validation: basic check for at least 10 chars
    if (!formData.license || formData.license.length < 10) newErrors.license = "Valid driving license required (e.g., DL-14-2020-0000000)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      window.open(createDriverApplicationMessage(formData), "_blank");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const inputClass = "w-full p-3 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-[#22c55e]";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#020617] py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-2">
            Join Tanvi Taxi Services as a Driver Partner
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Be your own boss. Earn more. Drive with dignity.
          </p>
          <div className="green-underline"></div>
        </div>

        <div className="card-white p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name*</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className={`${inputClass} ${errors.name ? 'border-red-500' : ''}`} placeholder="John Doe" />
                {errors.name && <p className={errorClass}>{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number*</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className={`${inputClass} ${errors.phone ? 'border-red-500' : ''}`} placeholder="9876543210" />
                {errors.phone && <p className={errorClass}>{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">WhatsApp Number*</label>
                <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className={`${inputClass} ${errors.whatsapp ? 'border-red-500' : ''}`} placeholder="9876543210" />
                {errors.whatsapp && <p className={errorClass}>{errors.whatsapp}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City*</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className={`${inputClass} ${errors.city ? 'border-red-500' : ''}`} placeholder="e.g. Gurugram" />
                {errors.city && <p className={errorClass}>{errors.city}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Address*</label>
              <textarea name="address" value={formData.address} onChange={handleChange} rows={2} className={`${inputClass} ${errors.address ? 'border-red-500' : ''}`} placeholder="Complete residential address"></textarea>
              {errors.address && <p className={errorClass}>{errors.address}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Years of Experience*</label>
                <input type="number" name="experience" value={formData.experience} onChange={handleChange} className={`${inputClass} ${errors.experience ? 'border-red-500' : ''}`} placeholder="e.g. 5" min="1" />
                {errors.experience && <p className={errorClass}>{errors.experience}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">License Number*</label>
                <input type="text" name="license" value={formData.license} onChange={handleChange} className={`${inputClass} ${errors.license ? 'border-red-500' : ''}`} placeholder="DL-XX-XXXX-XXXXXXX" />
                {errors.license && <p className={errorClass}>{errors.license}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Vehicle Type*</label>
                <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} className={inputClass}>
                  <option>Sedan (Dzire/Etios)</option>
                  <option>MUV (Ertiga)</option>
                  <option>Premium MUV (Innova)</option>
                  <option>Tempo Traveller</option>
                  <option>None (Looking to drive company car)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Do you own a vehicle?*</label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="ownVehicle" value="Yes" checked={formData.ownVehicle === "Yes"} onChange={handleChange} className="accent-[#22c55e]" />
                    <span className="text-gray-700 dark:text-gray-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="ownVehicle" value="No" checked={formData.ownVehicle === "No"} onChange={handleChange} className="accent-[#22c55e]" />
                    <span className="text-gray-700 dark:text-gray-300">No</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Education (Optional)</label>
                <input type="text" name="education" value={formData.education} onChange={handleChange} className={inputClass} placeholder="Highest qualification" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Languages Known (Optional)</label>
                <input type="text" name="languages" value={formData.languages} onChange={handleChange} className={inputClass} placeholder="e.g. Hindi, English" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Additional Notes (Optional)</label>
              <textarea name="notes" value={formData.notes} onChange={handleChange} rows={2} className={inputClass} placeholder="Any other details..."></textarea>
            </div>

            <button type="submit" className="w-full btn-green py-4 text-lg justify-center shadow-lg">
              Submit Application via WhatsApp →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
