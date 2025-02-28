import React from "react";
import {
  Book,
  UserCheck,
  UserX,
  Percent,
  Calendar,
  Download,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="space-y-3 md:space-y-6 lg:space-y-8 p-3 md:p-6 lg:p-8">
      <section>
        <h2 className="text-base md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
          Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <StatCard
            icon={<UserCheck className="h-4 w-4 md:h-6 md:w-6 lg:h-7 lg:w-7" />}
            title="Present Days"
            value="16"
            bgColor="bg-light-green"
          />
          <StatCard
            icon={<UserX className="h-4 w-4 md:h-6 md:w-6 lg:h-7 lg:w-7" />}
            title="Absent Days"
            value="5"
            bgColor="bg-light-red"
          />
          <StatCard
            icon={<Percent className="h-4 w-4 md:h-6 md:w-6 lg:h-7 lg:w-7" />}
            title="Percentage"
            value="80%"
            bgColor="bg-light-violet"
          />
          <StatCard
            icon={<Book className="h-4 w-4 md:h-6 md:w-6 lg:h-7 lg:w-7" />}
            title="Semester"
            value="I/I"
            bgColor="bg-light-orange"
          />
        </div>
      </section>

      <section>
        <h2 className="text-base md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
          Upcoming Assessments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <AssessmentCard date="16 Falgun" subject="Drawing" />
          <AssessmentCard date="19 Falgun" subject="FEE" />
          <AssessmentCard date="24 Falgun" subject="Math" />
        </div>
      </section>

      <section>
        <h2 className="text-base md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
          Basic Information
        </h2>
        <div className="bg-surface p-3 md:p-6 lg:p-8 rounded-lg shadow-sm">
          <div className="space-y-2">
            <InfoRow label="Name" value="Nabaraj Bhandari" />
            <InfoRow label="Phone" value="9822339211" />
            <InfoRow label="Roll No." value="081BCT041" />
            <InfoRow label="Semester" value="I/I" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-base md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
          Download Section
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <DownloadCard
            title="Attendance Report"
            icon={
              <Download
                className="h-4 w-4 md:h-6 md:w-6 lg:h-7 lg:w-7"
                link="#"
              />
            }
          />
          <DownloadCard
            title="Syllabus"
            icon={<Book className="h-4 w-4 md:h-6 md:w-6 lg:h-7 lg:w-7" />}
          />
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, title, value, bgColor }) {
  return (
    <div className="bg-surface p-3 md:p-6 lg:p-8 rounded-lg shadow-sm flex gap-3 md:gap-4 items-start">
      <div
        className={`${bgColor} p-2 md:p-4 lg:p-5 rounded-lg w-fit mb-3 md:mb-4`}
      >
        {icon}
      </div>
      <div>
        <p className="text-lg md:text-2xl lg:text-3xl font-semibold text-text-primary mt-1">
          {value}
        </p>
        <p className="text-xs md:text-base lg:text-lg text-text-secondary">
          {title}
        </p>
      </div>
    </div>
  );
}

function AssessmentCard({ date, subject }) {
  return (
    <div className="bg-surface p-3 md:p-6 lg:p-8 rounded-lg shadow-sm flex items-start gap-3 md:gap-4">
      <div className="bg-light-indigo p-2 md:p-4 lg:p-5 rounded-lg w-fit mb-3 md:mb-4">
        <Calendar />
      </div>
      <div>
        <p className="font-semibold text-sm md:text-lg lg:text-xl">{date}</p>
        <p className="text-xs md:text-base lg:text-lg text-text-secondary">
          {subject}
        </p>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex">
      <span className="font-medium w-16 md:w-24 lg:w-28 text-xs md:text-base lg:text-lg text-text-secondary">
        {label}:
      </span>
      <span className="text-xs md:text-base lg:text-lg text-text-primary font-medium">
        {value}
      </span>
    </div>
  );
}

function DownloadCard({ title, icon, link }) {
  return (
    <button className="bg-surface p-3 md:p-6 lg:p-8 rounded-lg shadow-sm flex items-center space-x-3 md:space-x-4 w-full">
      <div className="bg-light-blue p-2 md:p-4 lg:p-5 rounded-lg">{icon}</div>
      <span className="font-medium text-xs md:text-base lg:text-lg">
        <a href={link}>{title}</a>
      </span>
    </button>
  );
}

export default Dashboard;
