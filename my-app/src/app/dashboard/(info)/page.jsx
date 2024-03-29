

import { z } from "zod";

const InfoSchema = {
    "personal": {
        "Name": [z.string().min(1),"text"],
        "Profession": [z.string().min(1),"text"],
        "Email": [z.string().email(),"text"],
        "Phone": [z.string().min(10),"text"],
        "Github":[z.string().url,"text"], 
        "LinkedIn": [z.string().url(),"text"] 
    },
    "experience": {
        "Employer": [z.string().min(1),"text"],
        "Position": [z.string().min(1),"text"],
        "Location": [z.string().min(1),"text"],
        "Start_Date": [z.number(),"number"],
        "End_Date": [z.number(),"number"],
        "Description": [z.string().min(1),"text"]
    },
    "education": {
        "College":    [z.string().min(1),"text"],
        "Major":      [z.string().min(1),"text"],
        "Degree":     [z.string().min(1),"text"],
        "Start_Year": [z.number(),"number"],
        "End_Year":   [z.number(),"number"]
    },
    "skills": {
        "Programming_Languages": [z.string().min(1),"text"],
        "Libraries/Frameworks":  [z.string().min(1),"text"],
        "Tools/Platforms":       [z.string().min(1),"text"]
    }
};

export default function Info(topic) {
    return InfoSchema[topic];
}
