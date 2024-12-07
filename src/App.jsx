import { DashboardHeader } from './components/DashboardHeader'
import { DiagnosisHistory } from './components/DiagnosisHistory'
import { DiagnosticList } from './components/DiagnosticList'
import { LabResults } from './components/LabResults'
import { PatientInfo } from './components/PatientInfo'
import { PatientList } from './components/PatientList'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [patients, setpatients] = useState([]);
  const [Index, setIndex] = useState(0)

  async function patientlist() {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0");

      const requestOptions = {
          method: "GET",
          headers: myHeaders,
      };


      try {

          const response = await fetch(`https://fedskillstest.coalitiontechnologies.workers.dev`, requestOptions);

          if (!response.ok) {
              throw new Error("There is no data");
          }

          const data = await response.json();
          setpatients(data);
          console.log(data);

      } catch (error) {
          console.error(error)
      }
  }

  useEffect(() => {
      patientlist()
  }, []);


  useEffect(() => {
    console.log(Index);
    console.log(patients[Index]);
  }, [Index, patients])
  

  return (
    <>
    <div className= "bg-gray-200 p-5">
    <DashboardHeader />
    <div className='flex space-x-5 mt-5'>
    <PatientList name="Patient" patients={patients} index={Index} setIndex={setIndex} />
    <div className='flex flex-col gap-5'>
    {patients.length!=0 && patients[Index].diagnosis_history && <DiagnosisHistory patient_d={patients[Index]?.diagnosis_history}/>}
    {patients.length!=0 && patients[Index].diagnostic_list && <DiagnosticList patient = {patients[Index]?.diagnostic_list}/>}
    </div>
    <div className='flex flex-col gap-5'>
    {patients.length!=0 && <PatientInfo patient={patients[Index]}/>}
    <LabResults patient = {patients[Index]?.lab_results}/>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
