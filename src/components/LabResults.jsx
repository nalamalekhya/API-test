import { Download } from 'lucide-react';
import { useEffect } from 'react';

export function LabResults({patient}) {
    // const results = [
    //     { name: 'Blood Tests', icon: Download },
    //     { name: 'CT Scans', icon: Download },
    //     { name: 'Radiology Reports', icon: Download },
    //     { name: 'Blood Tests', icon: Download },
    //     { name: 'CT Scans', icon: Download },
    //     { name: 'Radiology Reports', icon: Download },
    //     { name: 'Blood Tests', icon: Download },
    //     { name: 'CT Scans', icon: Download },
    //     { name: 'Radiology Reports', icon: Download },
    //     { name: 'Blood Tests', icon: Download },
    //     { name: 'CT Scans', icon: Download },
    //     { name: 'Radiology Reports', icon: Download },
    // ]


    const results = patient;

    useEffect(() => {
        console.log(patient)
    }, [patient])
    

    return (
        <div className="bg-white rounded-lg p-6 max-h-[19rem]">
            <h2 className="text-xl font-bold mb-4">Lab Results</h2>
            <div className="space-y-2 max-h-[13.5rem] overflow-y-auto">
                {results?.map((result, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                    >
                        <span>{result}</span>
                        <Download className="w-5 h-5" />
                    </div>
                ))}
            </div>
        </div>
    )
}

