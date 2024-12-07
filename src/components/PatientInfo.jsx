import { Calendar, User2, Phone, Shield } from 'lucide-react'
import { useEffect } from 'react'

export function PatientInfo({patient}) {

useEffect(() => {
    console.log(patient)
}, [patient])

    return (
        <div className="w-80 bg-white rounded-lg p-4 min-h-[43rem]">
            <div className="flex flex-col items-center mb-6">
                <img
                    src={patient.profile_picture}
                    alt="Jessica Taylor"
                    width={120}
                    height={120}
                    className="w-40 h-40 rounded-full my-4"
                />
                <h2 className="text-xl font-bold">{patient.name}</h2>
            </div>
            <div className="space-y-5">
                <div className="flex items-center gap-3 ">
                    <div className=' w-8 h-8 bg-gray-100 rounded-full p-1.5'>
                    <Calendar className="w-5 h-5 text-black " />
                    </div>
                    <div>
                        <div className="text-sm text-black">Date Of Birth</div>
                        <div className='font-semibold'>{patient.date_of_birth}</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                <div className=' w-8 h-8 bg-gray-100 rounded-full p-1.5'>
                    <User2 className="w-5 h-5 text-black " />
                    </div>
                    <div>
                        <div className="text-sm text-black">Gender</div>
                        <div className='font-semibold'>{patient.gender}</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                <div className=' w-8 h-8 bg-gray-100 rounded-full p-1.5'>
                    <Phone className="w-5 h-5 text-black " />
                    </div>
                    <div>
                        <div className="text-sm text-black">Contact Info.</div>
                        <div className='font-semibold'>{patient.phone_number}</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                <div className=' w-8 h-8 bg-gray-100 rounded-full p-1.5'>
                    <Phone className="w-5 h-5 text-black " />
                    </div>
                    <div>
                        <div className="text-sm text-black">Emergency Contacts</div>
                        <div className='font-semibold'>{patient.emergency_contact}</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                <div className=' w-8 h-8 bg-gray-100 rounded-full p-1.5'>
                    <Shield className="w-5 h-5 text-black " />
                    </div>
                    <div>
                        <div className="text-sm text-black">Insurance Provider</div>
                        <div className='font-semibold'>{patient.insurance_type}</div>
                    </div>
                </div>
            </div>
            <button className="w-52 h-12 m-8 border border-black bg-gray-200 hover:bg-[#01F0D0] rounded-3xl font-semibold">Show All Information</button>
        </div>
    )
}

