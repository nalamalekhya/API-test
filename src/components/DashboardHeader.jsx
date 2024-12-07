import { Settings, MoreVertical } from 'lucide-react';
import Logo from "../assets/TestLogo.png";
import Pic1 from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"


export function DashboardHeader() {
    return (
        <header className="flex items-center justify-between px-12 py-2 mx-1 bg-white rounded-full ">
            <div className="flex items-center gap-3">
                <img
                    src={Logo}
                    alt="Tech.Care"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                />
                <span className="text-3xl items-center font-semibold text-black">Tech.Care</span>
            </div>
            <nav className="flex items-center gap-6">
                <a href="#Overview" className="text-black hover:text-gray-900 hover:bg-[#01F0D0] px-4 py-2 rounded-full">Overview</a>
                <a href="#Patients" className="text-black hover:text-gray-900 hover:bg-[#01F0D0] px-4 py-2 rounded-full">Patients</a>
                <a href="#Schedule" className="text-black hover:text-gray-900 hover:bg-[#01F0D0] px-4  py-2 rounded-full">Schedule</a>
                <a href="#Message" className="text-black hover:text-gray-900 hover:bg-[#01F0D0]  px-4 py-2 rounded-full">Message</a>
                <a href="#Transactions" className="text-black hover:text-gray-900 hover:bg-[#01F0D0]  px-4 py-2 rounded-full">Transactions</a>
            </nav>
            <div className="flex items-center ">
                <div className="flex items-center justify-evenly  w-52">
                    <img
                        src={Pic1}
                        alt="Doctor profile"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <div className="font-small text-black">Dr. Jose Simmons</div>
                        <div className="text-sm text-gray-500">General Practitioner</div>
                    </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Settings className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreVertical className="w-5 h-5" />
                </button>
            </div>
        </header>
    )
}

