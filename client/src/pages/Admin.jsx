import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";

import Button from "../components/Button";
import { Trash, FileImage, UserPen } from "lucide-react";

const SERVER_URI = import.meta.env.VITE_SERVER_URI;
const socket = io(SERVER_URI);

const Admin = () => {
  const [rfidData, setRfidData] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: "",
    rollNo: "",
    uid: "",
    section: "",
  });
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchLogsAndStudents();
    socket.on("new-log", fetchLogsAndStudents);
    socket.on("delete-log", fetchLogsAndStudents);
    return () => {
      socket.off("new-log", fetchLogsAndStudents);
      socket.off("delete-log", fetchLogsAndStudents);
    };
  }, []);

  const fetchLogsAndStudents = async () => {
    try {
      const [logsRes, studentsRes] = await Promise.all([
        axios.get(`${SERVER_URI}/api/logs`),
        axios.get(`${SERVER_URI}/api/students`),
      ]);
      const logsWithDetails = logsRes.data.map((log, index) => {
        const student = studentsRes.data.find((s) => s.uid === log.uid) || {};
        return {
          ...log,
          sn: index + 1,
          name: student.name || "Unknown",
          rollNo: student.rollNo || "N/A",
          section: student.section || "N/A",
          date: new Date(log.timestamp).toLocaleDateString(),
          time: new Date(log.timestamp).toLocaleTimeString(),
        };
      });
      setRfidData(logsWithDetails);
    } catch (error) {
      console.error("Error fetching logs and students:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
  };

  const addStudentEntry = async () => {
    if (Object.values(newStudent).some((val) => !val)) {
      return alert("All fields are required!");
    }
    try {
      await axios.post(`${SERVER_URI}/api/students`, newStudent);
      alert("Student Added Successfully!");
      setNewStudent({ name: "", rollNo: "", uid: "", section: "" });
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const deleteEntry = async (id) => {
    try {
      await axios.delete(`${SERVER_URI}/api/logs/${id}`);
      fetchLogsAndStudents();
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
        formData
      );
      setNewStudent((prev) => ({
        ...prev,
        profilePic: response.data.secure_url,
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="flex flex-col gap-1 md:gap-2 lg:gap-4 p-2 md:p-4 lg:p-6">
      <div className="flex flex-col gap-1 md:gap-2">
        <p className="text-sm md:text-lg lg:text-xl ml-2 font-semibold">
          Attendance Report
        </p>
        <div className="rounded-md bg-surface py-1 md:py-2 overflow-x-auto">
          <table className="min-w-full table-auto border-separate border-spacing-1/2 px-1 md:px-2">
            <thead>
              <tr className="bg-primary-light text-text-primary">
                <th className="px-1 md:px-2 py-1 border-b-border text-xs md:text-sm lg:text-base">
                  SN
                </th>
                <th className="px-1 md:px-2 py-1 border-b-border text-xs md:text-sm lg:text-base">
                  Name
                </th>
                <th className="px-1 md:px-2 py-1 border-b-border text-xs md:text-sm lg:text-base">
                  Roll No
                </th>
                <th className="px-1 md:px-2 py-1 border-b-border text-xs md:text-sm lg:text-base">
                  UID
                </th>
                <th className="px-1 md:px-2 py-1 border-b-border text-xs md:text-sm lg:text-base">
                  Section
                </th>
                <th className="px-1 md:px-2 py-1 border-b-border text-xs md:text-sm lg:text-base">
                  Date
                </th>
                <th className="px-1 md:px-2 py-1 border-b-border text-xs md:text-sm lg:text-base">
                  Time
                </th>
                <th className="px-1 md:px-2 py-1 border-b-border text-xs md:text-sm lg:text-base">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="space-y-1">
              {rfidData.map((entry) => (
                <tr
                  key={entry._id}
                  className="hover:bg-color-surface text-xs md:text-sm lg:text-base text-text-secondary border-b-border"
                >
                  <td className="px-1 md:px-2 py-1">{entry.sn}</td>
                  <td className="px-1 md:px-2 py-1">{entry.name}</td>
                  <td className="px-1 md:px-2 py-1">{entry.rollNo}</td>
                  <td className="px-1 md:px-2 py-1">{entry.uid}</td>
                  <td className="px-1 md:px-2 py-1">{entry.section}</td>
                  <td className="px-1 md:px-2 py-1">{entry.date}</td>
                  <td className="px-1 md:px-2 py-1">{entry.time}</td>
                  <td className="px-1 md:px-2 py-1">
                    <Button
                      type="button"
                      title="Delete"
                      icon={Trash}
                      variant="danger"
                      onClick={() => deleteEntry(entry._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col gap-1 md:gap-2">
        <p className="text-sm md:text-lg lg:text-xl ml-2 font-semibold">
          Add New Student
        </p>
        <div className="rounded-md bg-surface py-2 md:py-4 lg:py-6 px-2 md:px-4 lg:px-6">
          <div className="flex flex-col md:flex-row justify-stretch gap-2 md:gap-4 lg:gap-6">
            <div className="w-full">
              {["name", "rollNo", "uid", "section"].map((field) => (
                <div key={field} className="mb-2 md:mb-4">
                  <input
                    type="text"
                    name={field}
                    placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                    value={newStudent[field]}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-xs md:text-sm lg:text-base text-text-primary bg-primary-light"
                  />
                </div>
              ))}
            </div>
            <div className="mb-2 md:mb-4 w-full md:w-1/2">
              <p className="text-xs md:text-sm lg:text-base text-text-secondary">
                Upload Profile Picture:
              </p>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
              <Button
                type="button"
                title="Choose Image"
                icon={FileImage}
                variant="secondary"
                onClick={() => fileInputRef.current.click()}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              type="button"
              title="Add Student"
              icon={UserPen}
              variant="success"
              onClick={addStudentEntry}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
