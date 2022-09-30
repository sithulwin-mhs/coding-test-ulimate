import { useState } from "react";

export function Hook () {

    const patList = [
        {id:1, code:"B-0025", status:"Allergy", petName: "Milo",pawrent:"The Nu San",breed:"Beagle",gender:"Female",dateOfBirth:"1-5-2021",contact:"09797006014",address:"တိုက်(4B) အခန်း (၂၀၀)| Star Condo,Kamayut,Yangon"},
        {id:2, code:"S-0025", status:"Allergy", petName: "MJ",pawrent:"Pink Pink",breed:"Spaniel",gender:"Female",dateOfBirth:"3-4-2021",contact:"09963458012",address:"ခြံအမှတ် (၅) စံပယ်ခြံလမ်း(၂)လမ်း,Hlaing,Yangon"},
        {id:3, code:"G-0025", status:"Picky", petName: "Lu Lu",pawrent:"Sein Sein",breed:"Golden Retriever",gender:"Male",dateOfBirth:"6-10-2021",contact:"09402578592",address:"တိုက်(1A)  အခန်း (၁၀၁)| Gems Condo,Hlaing,Yangon"},
        {id:4, code:"G-0025", status:"Picky", petName: "Sky",pawrent:"Kyaw Myo Oo",breed:"Golden Retriever",gender:"Male",dateOfBirth:"5-5-2021",contact:"09963458016",address:"ခြံအမှတ် (၇)  စံပယ်ခြံလမ်း(၂)လမ်း,Sanchaung,Yangon"},
        {id:5, code:"G-0025", status:"Picky", petName: "Lu Lu",pawrent:"Pink Pink",breed:"Golden Retriever",gender:"Female",dateOfBirth:"7-8-2021",contact:"09797006012",address:"ခြံအမှတ် (၁)  စံပယ်ခြံလမ်း(၅)လမ်း,Hlaing,Yangon"},
        {id:6, code:"G-0025", status:"Picky", petName: "Lu Lu",pawrent:"Naychi Lin",breed:"Golden Retriever",gender:"Male",dateOfBirth:"15-4-2021",contact:"0997877705",address:"တိုက်(1A)  အခန်း (၀၀၅)| Gems Condo,Kamayut,Yangon"}
    ]

    const [patientList,setPatientList] = useState(patList);

    // useEffect(()=>{
    //     localStorage.setItem("patientListUpdate", JSON.stringify(patientList));
    // },[])

    return [
        patientList,
        setPatientList
    ]
}