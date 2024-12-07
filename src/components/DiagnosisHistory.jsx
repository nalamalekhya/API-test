import { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Stethoscope, Thermometer, HeartPulse } from 'lucide-react'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)



export function DiagnosisHistory({ patient_d }) {

    const months = patient_d?.map((item, idx) => {
        return `${item.month.substring(0, 3)}, ${item.year}`
    });

    const systolicData = patient_d?.map((items, idx) => {
        return items.blood_pressure?.systolic?.value
    });

    const diastolicData = patient_d?.map((items, idx) => {
        return items.blood_pressure?.diastolic?.value
    });

    const systoliclevel = patient_d?.map((items, idx) => {
        return `${items.blood_pressure?.systolic?.levels}`
    });

    const diastoliclevel = patient_d?.map((items, idx) => {
        return `${items.blood_pressure?.diastolic?.levels}`
    });

    const heartrateData = patient_d?.map((items, idx) => {
        return items.heart_rate?.value
    });

    const heartratelevel = patient_d?.map((items, idx) => {
        return `${items.heart_rate?.levels}`
    });
    const respiratoryData = patient_d?.map((items, idx) => {
        return items.respiratory_rate?.value
    });
    const respiratorylevel = patient_d?.map((items, idx) => {
        return `${items.respiratory_rate?.levels}`
    });
    const temperatureData = patient_d?.map((items, idx) => {
        return `${items.temperature?.value}`
    });
    const temperaturelevel = patient_d?.map((items, idx) => {
        return `${items.temperature?.levels}`
    });

    useEffect(() => {
        console.log(systolicData);
    }, [systolicData])
    
    useEffect(() => {
        console.log(diastolicData);
    }, [diastolicData])

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Systolic',
                data: systolicData,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.4,
            },
            {
                label: 'Diastolic',
                data: diastolicData,
                borderColor: 'rgb(53, 162, 235)',
                tension: 0.4,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
        },
        scales: {
            y: {
                min: 60,
                max: 180,
            },
        },
    }

    return (
        <div className="bg-white rounded-lg p-6 w-[50rem] h-[42rem]">
            <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Diagnosis History</h2>
            </div>
            <div className='flex gap-2 mt-10 bg-purple-100 rounded-lg'>
                <div className='w-[32rem]'>
                    <div className="flex items-center justify-between px-7">
                        <h2 className="text-xl font-semibold my-4 mb-2">Blood Pressure</h2>
                        <select className="text-sm border bg-purple-100 rounded-md px-2 py-1">
                            <option>Last 6 months</option>
                            <option>Last year</option>
                            <option>All time</option>
                        </select>
                    </div>
                    <div className="mb-6 ">
                        <Line data={data} options={options} />
                    </div>
                </div>
                <div className="  rounded-lg  space-y-4 py-10 ">
                    <div className="space-y-2 ">
                        <div className="flex items-center gap-2 w-40">
                            <div className="w-2 h-2 rounded-full bg-pink-500" />
                            <span className="text-sm font-bold">Systolic</span>
                        </div>
                        <div className="text-2xl font-bold">{systolicData[0]}</div>
                        <div className="flex items-center gap-2 text-xs ">
                            <span>{systoliclevel[0]}</span>
                        </div>
                        <hr />
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500" />
                            <span className="text-sm font-bold">Diastolic</span>
                        </div>
                        <div className="text-2xl font-bold">{diastolicData[0]}</div>
                        <div className="flex items-center gap-2 text-xs ">
                            <span>{diastoliclevel[0]}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5 ">
                <div className="bg-blue-100 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 w-16 h-16 bg-white rounded-full">
                            <Stethoscope className="w-12 h-12 text-blue-500" />
                        </div>
                    </div>
                    <span className="text-sm text-gray-600">Respiratory Rate</span>
                    <div className="text-2xl font-bold mb-1">{respiratoryData[0]} bpm</div>
                    <div className={`text-sm ${respiratorylevel[0] === 'Lower then Average'
                                    ?'text-red-500'
                                    :'text-green-500'} py-2`}>{respiratorylevel[0]}</div>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 w-16 h-16 bg-white rounded-full">
                            <Thermometer className="w-12 h-12 text-red-500" />
                        </div>
                    </div>
                    <span className="text-sm text-gray-600">Temperature</span>
                    <div className="text-2xl font-bold mb-1">{temperatureData[0]}°F</div>
                    <div className={`text-sm ${temperaturelevel[0] === 'Higher than Average' 
                                ?'text-red-500'
                                :'text-green-500'} py-2`}>{temperaturelevel[0]}</div>
                </div>
                <div className="bg-pink-100 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 w-16 h-16 bg-white rounded-full">
                            <HeartPulse className="w-12 h-12 text-red-500" />
                        </div>
                    </div>
                    <span className="text-sm text-gray-600">Heart Rate</span>
                    <div className="text-2xl font-bold mb-1">{heartrateData[0]} bpm</div>
                    <div className={`text-sm py-2 ${heartratelevel[0] === 'Lower than Average'
                            ? 'text-red-500'
                            : 'text-green-500'
                        }`}>
                        {heartratelevel[0]}
                    </div>
                </div>
            </div>
        </div>
    )
}

