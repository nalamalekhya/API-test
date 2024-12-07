import { Search, MoreVertical } from 'lucide-react'


// const patients1 = [
//     { id: 1, name: 'Emily Williams', gender: 'Female', age: 18, image: '/placeholder.svg' },
//     { id: 2, name: 'Ryan Johnson', gender: 'Male', age: 45, image: '/placeholder.svg' },
//     { id: 3, name: 'Brandon Mitchell', gender: 'Male', age: 35, image: '/placeholder.svg' },
//     { id: 4, name: 'Jessica Taylor', gender: 'Female', age: 28, image: '/placeholder.svg', active: true },
//     { id: 5, name: 'Samantha Johnson', gender: 'Female', age: 56, image: '/placeholder.svg' },
//     { id: 6, name: 'Emily Williams', gender: 'Female', age: 18, image: '/placeholder.svg' },
//     { id: 7, name: 'Ryan Johnson', gender: 'Male', age: 45, image: '/placeholder.svg' },
//     { id: 8, name: 'Brandon Mitchell', gender: 'Male', age: 35, image: '/placeholder.svg' },
//     { id: 9, name: 'Jessica Taylor', gender: 'Female', age: 28, image: '/placeholder.svg', active: true },
//     { id: 10, name: 'Samantha Johnson', gender: 'Female', age: 56, image: '/placeholder.svg' },
//     { id: 11, name: 'Emily Williams', gender: 'Female', age: 18, image: '/placeholder.svg' },
//     { id: 12, name: 'Ryan Johnson', gender: 'Male', age: 45, image: '/placeholder.svg' },
//     { id: 13, name: 'Brandon Mitchell', gender: 'Male', age: 35, image: '/placeholder.svg' },
//     { id: 14, name: 'Jessica Taylor', gender: 'Female', age: 28, image: '/placeholder.svg', active: true },
//     { id: 15, name: 'Samantha Johnson', gender: 'Female', age: 56, image: '/placeholder.svg' },
//     // Add more patients as needed
// ]



// eslint-disable-next-line react/prop-types
export function PatientList({name,patients,index,setIndex}) {

    return (
        <div className="w-80 bg-white rounded-lg p-4 ">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">{name}</h2>
                <div className="relative p-1">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="search"
                        id='search'
                        placeholder="Search"
                        className="pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>
            </div>
            <div className="space-y-2 max-h-[57rem] overflow-y-auto">
                {patients?.map((patient,idx) => (
                    <button
                        key={patient.name}
                        onClick={()=>setIndex(idx)}
                        className={index==idx?' rounded-lg border border-gray-500  bg-[#01F0D0]':'' }
                    >
                    <div
                        className={`flex items-center gap-3 p-3 w-64 rounded-lg border border-b-2 border-gray-600}`}
                    >
                        <img
                            src={patient.profile_picture}
                            alt={patient.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                            <div className="font-medium">{patient.name}</div>
                            <div className="text-sm text-gray-500">
                                {patient.gender}, {patient.age}
                            </div>
                        </div>
                        <button className="p-1 hover:bg-gray-100 rounded">
                            <MoreVertical className="w-4 h-4" />
                        </button>
                    </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

