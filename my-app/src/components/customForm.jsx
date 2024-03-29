"use client"
import { DevTool } from "@hookform/devtools"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"


export default function CustomForm({topic}) {
    const {
        register,
        handleSubmit,
        formState,
        control
    } = useForm()
    const { errors } = formState;

    const eachField = (label, props = {}) => {
        const name=`${topic}.${label}`
        return (
        <div className="form-control">
                <Label htmlFor={label}>{ label}</Label>
                {errors[topic] && errors[topic][label] && (
                    <p className="errors">{errors[topic][label]?.message}</p>)}
            <Input {...register(name, props)} type="text" id={name} />
        </div>)
    }
    const onSubmit = (data) => console.log(data) 
    
    return (
        <div>
            <form className="grid grid-rows-2 gap-2 p-2" onSubmit={handleSubmit(onSubmit)} noValidate>
                {eachField("Name")} 
                {eachField("Email:", { required: { value:true,message:"Enter Email"} })} 
                <Button className="w-1/2"type="submit">Submit</Button>
            </form>
            <DevTool control={control} />
    </div>
    )
}

