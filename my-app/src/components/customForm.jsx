"use client"
import { DevTool } from "@hookform/devtools"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import Info from "@/app/dashboard/(info)/page"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

export default function CustomForm({ topic }) {
    const _ = require("lodash");
    const columns = Info(topic);
    const schema = z.object(Object.fromEntries(
        Object.entries(columns).map(([key, value]) => [key,columns[key][0]])
    ));

    const {
        register,
        handleSubmit,
        formState,
        control,
        reset
    } = useForm({resolver:zodResolver(schema)})
    
    const { errors, isSubmitting } = formState;
    
    const eachField = (label, crops,type) => {
        const name = `${topic}.${label}`
        const kype = type === "number" ? "number" : "text";
        return (
        <div>
                <Label htmlFor={label}>{ label}</Label>
                {errors[label]  && (
                    <p className="errors">{errors[label]?.message}</p>)}
            <Input {...register(label, crops)} type={kype} id={label} />
        </div>)
    }
    const onSubmit = (data) => {
        try {
            console.log(data);
            schema.parse(data);
        }
        catch (validationError) {
            console.log("Validation Error:",validationError);
        }
    } 
    
    const Fields = () => {
        return (
            <>
                {Object.keys(columns).map(key => (
                eachField(key, columns[key][0],columns[key][1])
            ))}
            </>
        )
    }

    return (
        <div>
            <form className="grid gap-2 " onSubmit={handleSubmit(onSubmit)} noValidate>
                <Fields />
                <div className="flex justify-evenly">
                    <Button disabled={isSubmitting} className="w-1/3" type="submit">
                        {isSubmitting?"Submitting...":"Submit"}
                    </Button>
                    <Button className="w-1/3" onClick={() => { reset() }} >Reset</Button>
                </div>
            </form>
            <DevTool control={control} />
    </div>
    )
}

