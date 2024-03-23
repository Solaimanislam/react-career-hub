import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
    const { logo, job_title, company_name, location, remote_or_onsite, job_type, salary  } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-32 w-full" src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite} </button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type} </button>
                </div>
                <div className="mt-4 flex gap-6">
                    <h2 className="flex gap-3 mr-2"><IoLocationOutline className="text-2xl"></IoLocationOutline>{location} </h2>
                    <h2 className="flex gap-3 "> <CiDollar className="text-2xl"></CiDollar>   Salary: {salary} </h2>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;