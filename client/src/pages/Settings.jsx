import { useState } from "react";
import Button from "../components/Button";

const Settings = () => {
  const [formData, setFormData] = useState({
    username: "",
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Details:", formData);
  };

  return (
    <div className="bg-surface p-3 md:p-6 lg:p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
        <div>
          <label className="block font-medium text-sm md:text-base lg:text-lg">
            New Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-2 py-1 md:px-4 md:py-3 lg:px-5 lg:py-4 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-text-primary bg-primary-light"
            placeholder="Enter new username"
          />
        </div>
        <div>
          <label className="block font-medium text-sm md:text-base lg:text-lg">
            Old Password
          </label>
          <input
            type="password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            className="w-full px-2 py-1 md:px-4 md:py-3 lg:px-5 lg:py-4 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-text-primary bg-primary-light"
            placeholder="Enter old password"
          />
        </div>
        <div>
          <label className="block font-medium text-sm md:text-base lg:text-lg">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full px-2 py-1 md:px-4 md:py-3 lg:px-5 lg:py-4 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-text-primary bg-primary-light"
            placeholder="Enter new password"
          />
        </div>
        <Button type="button" title="Update Password" />
      </form>
    </div>
  );
};

export default Settings;
