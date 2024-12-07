import { useEffect } from "react"

export function DiagnosticList({patient}) {
    // const diagnostics = [
    //     { problem: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation'},
    //     { problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured'},
    //     { problem: 'Asthma', description: 'Recurrent episodes of bronchial constriction', status: 'InActive'},
    //     { problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured'},
    //     { problem: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation'},
    //     { problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured'},
    //     { problem: 'Asthma', description: 'Recurrent episodes of bronchial constriction', status: 'InActive'},
    //     { problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured'},
    // ]
    const diagnostics = patient?.map((item,idx) =>{
        // this is string
        // return `${items.name},${items.description},${items.status}`
        // this is object
        return {
            name:item.name,
            description:item.description,
            status:item.status
        }
    })

    useEffect(() => {
        console.log(diagnostics);
    }, [diagnostics])
    


    return (
        <div className="bg-white rounded-lg p-6 h-[20rem] ">
            <h2 className="text-2xl font-bold mb-4">Diagnostic List</h2>
            <table className="w-full ">
                <div className="max-h-[13.5rem] overflow-y-auto mt-3 ">
                <thead>
                    <tr className="text-left text-black">
                        <th className="pb-4 px-5">Problem/Diagnosis</th>
                        <th className="pb-4 px-5">Description</th>
                        <th className="pb-4 px-5">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {diagnostics.map((diagnostic) => (
                        <tr key={diagnostics.name} className="border-t">
                            <td className="py-3 px-5">{diagnostic.name}</td>
                            <td className="py-3 px-5 text-gray-600">{diagnostic.description}</td>
                            <td className="py-3 px-5">
                                <span>
                                    {diagnostic.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </div>
            </table>
        </div>
    )
}

